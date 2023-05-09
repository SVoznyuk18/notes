import styled from "styled-components";

import { colors } from "ConfigsRoot/colors";

export const InputWrapper = styled.div`
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: ${colors.primary};
    border: none;
    border-radius: 4px;
`;

export const Input = styled.input`
    width: 100%;
    height: ${props => props.height || '25px'};
    padding: ${props => props.padding || '0 30px'};
    border: none;
    border-radius: 4px;
    font-size: ${props => props.fontSize || '16px'};
    font-weight: ${props => props.fontWeight || '400'};
    letter-spacing: 1px;
    background-color: ${colors.primary};

    &::placeholder {
        text-align: center;
    }
`;
export const SvgWrap = styled.div`
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
`;