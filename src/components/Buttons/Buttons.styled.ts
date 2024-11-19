import styled from "@emotion/styled";
import { smallRadius, colors } from "../../global_values/styles";

export const ButtonHolder = styled.div`
    margin-top: 18px;
    display: flex;
    gap: 28px;

    button{
        font-size: 12px;
        line-height: 16.34px;
        font-weight: 700;
        height: 30px;
        width: 90px;
        border-radius:  ${smallRadius};
        border: 1px solid ${colors.border};
        background-color: ${colors.wgBackground};
    }

`