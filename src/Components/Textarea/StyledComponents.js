import styled from 'styled-components'

import { colors } from "ConfigsRoot/colors";

export const TextareaInput = styled.textarea`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
    padding: ${props => props.padding || '0px 20px'};
    font-size: ${props => props.fontSize || '16px'};
    font-weight: ${props => props.fontWeight || '400'};
    resize: none;
    letter-spacing: 1px;
    border: none;
    background-color: ${colors.primary};
`;