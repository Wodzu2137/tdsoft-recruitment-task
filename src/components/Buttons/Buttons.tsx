import React, { useContext } from "react";
import { AppDataContext } from "../../contexts/AppData.context";
import { ButtonHolder } from "./Buttons.styled"

const Buttons: React.FC = () => {
  const { currentId, setCurrentId } = useContext(AppDataContext);

  return <ButtonHolder>
    <button onClick={()=>{setCurrentId(currentId - 1)}}>Previous</button>
    <button onClick={()=>{setCurrentId(currentId + 1)}}>Next</button>
  </ButtonHolder>;
};

export default Buttons;
