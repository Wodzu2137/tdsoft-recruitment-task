import React, { useContext } from "react";
import { AppDataContext } from "../../contexts/AppData.context";
import {
  CharacterWidgetContainer,
  CharacterStatusLabel,
  CharacterAvatar,
  CharacterContentHolder,
  CharacterInfo,
  CharacterDataElement,
  ErrorInfo
} from "./CharacterWidget.styled";

const CharacterWidget: React.FC = () => {
  const { character, isLoading } = useContext(AppDataContext);

  return (
    <CharacterWidgetContainer>
      {
        isLoading ?
          <ErrorInfo>Loading...</ErrorInfo>
          :
          character ?
            <>
              <CharacterStatusLabel isAlive={character.status}>
                <span>{character.name}</span>
              </CharacterStatusLabel>

              <CharacterContentHolder>
                <CharacterInfo>
                  <CharacterDataElement>
                    <span>id</span>
                    <span>#{character.id}</span>
                  </CharacterDataElement>
                  <CharacterDataElement>
                    <span>status</span>
                    <span>{character.status}</span>
                  </CharacterDataElement>
                  <CharacterDataElement>
                    <span>gender</span>
                    <span>{character.gender}</span>
                  </CharacterDataElement>
                  <CharacterDataElement>
                    <span>episodes</span>
                    <span>{character.episodes}</span>
                  </CharacterDataElement>
                </CharacterInfo>
                <CharacterAvatar src={character.imageUrl} alt="Character avatar" />
              </CharacterContentHolder>
            </>
            :
            <ErrorInfo>An error occured... try again later.</ErrorInfo>
      }


    </CharacterWidgetContainer>
  );
};

export default CharacterWidget;
