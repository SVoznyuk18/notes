import styled from "styled-components";
import { colors } from "ConfigsRoot/colors";

export const Button = styled.button`
    width: ${props => props.width || '40px'};
    height: ${props => props.height || '25px'};
    padding: 3px 2px;
    margin: ${props => props.margin || '0px'};
    background-color: ${colors.white};
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        box-shadow:  ${props => props.colorShadow ? `${props.colorShadow} 0px 3px 3px 0px, ${props.colorShadow} 0px 4px 6px 0px` : ''};
    }
`;