import React, { createContext, useState, useEffect, useMemo, SetStateAction, Dispatch } from "react";
import ky, { ResponsePromise } from "ky";
import { API_URL } from "../config";
import type { Character } from "../types/RickAndMorty.types";

type AppData = {
  isLoading: boolean;
  setCurrentId: Dispatch<SetStateAction<AppData["currentId"]>>,
  character: {
    name: Character["name"];
    status: Character["status"];
    imageUrl: string;
    gender: Character["gender"];
    episodes: number;
    id: number;
  } | null;
  currentId: number,
};

export const AppDataContext = createContext<AppData>({
  isLoading: true,
  character: null,
  currentId: 1,
  setCurrentId: () => { }
});

export const AppDataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState<AppData["isLoading"]>(false);
  const [characterData, setCharacterData] = useState<AppData["character"]>(
    null
  );
  const [currentId, setCurrentId] = useState<AppData["currentId"]>(1)

  const appData: AppData = useMemo(() => {
    return {
      isLoading,
      character: characterData,
      currentId: characterData?.id || 0,
      setCurrentId: setCurrentId,
    };
  }, [isLoading, characterData]);

  useEffect(() => {
    (async () => {

      //If the ID is incorrect, don't do anything
      if (!currentId) return
      if (currentId < 1 || currentId > 826) return
      
      setIsLoading(true)

      const response = await ky.get(`${API_URL}/character/${currentId}`).catch(
        () => {
          setCharacterData(null);
          setIsLoading(false);
        }
      )

      if (!response) return //No need to change the state. We're already sure that the response is not of type 'void', as the catch breaks out of the function.

      const parsedCharacter: Character = await response.json();

      const nextCharacterData: AppData["character"] = {
        id: parsedCharacter.id,
        name: parsedCharacter.name,
        status: parsedCharacter.status,
        imageUrl: parsedCharacter.image,
        gender: parsedCharacter.gender,
        episodes: parsedCharacter.episode.length
      };

      setCharacterData(nextCharacterData);
      setIsLoading(false);
    })();
  }, [currentId]);

  return (
    <AppDataContext.Provider value={appData}>
      {children}
    </AppDataContext.Provider>
  );
};
