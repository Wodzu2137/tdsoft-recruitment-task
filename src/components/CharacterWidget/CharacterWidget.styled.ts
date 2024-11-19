import styled from "@emotion/styled";

import { colors, smallRadius } from "../../global_values/styles"

export const CharacterWidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 120px;
  background-color: ${colors.wgBackground};
  border-radius: 8px;
  border: 1px solid ${colors.border};
  font-size: 11px;
  line-height: 14.98px;
`;

export const CharacterStatusLabel = styled.span<{ isAlive: string }>`
  background-color: ${(props) => (props.isAlive === "unknown" ? colors.unknown : props.isAlive === "Alive" ? colors.alive : colors.dead)};
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  font-weight: 700;

  span{
    height: 14px;
  }
`;

export const CharacterAvatar = styled.img`
  box-sizing: border-box;
  width: 70px;
  height: 70px;
  border-radius: ${smallRadius};
  filter: drop-shadow(0 0 4px #00000026);
`;

export const CharacterContentHolder = styled.div`
  flex: 1 1 0%;
  padding: 10px;
  display: flex;
`

export const CharacterInfo = styled.div`
  flex: 1 1 0%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: space-between;
`

export const CharacterDataElement = styled.div`
  display: flex;
  align-items: center;
  height: 17px;
  font-weight: 600;
  gap: 4px;

  span{
    display: flex;
    align-items: center;
    min-height: 100%
  }
  span:nth-of-type(1){
    background-color: ${colors.information};
    border-radius: ${smallRadius};
    padding: 0 4px 2px 4px;
  }
  span:nth-of-type(2){
    padding-bottom: 1px;
    }

`

export const ErrorInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`