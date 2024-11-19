import React from "react";
import { AppDataContextProvider } from "./contexts/AppData.context";
import { AppContainer } from "./App.styled";
import CharacterWidget from "./components/CharacterWidget";
import Buttons from "./components/Buttons/Buttons"
import { Global, css } from "@emotion/react"

const openSans = css`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
  `

const App: React.FC = () => {
  return (
    <AppDataContextProvider>
      <Global styles={openSans} />
      <AppContainer>
        <CharacterWidget />
        <Buttons />
      </AppContainer>
    </AppDataContextProvider>
  );
};

export default App;
