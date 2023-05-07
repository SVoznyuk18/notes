import styled from "styled-components";

import { colors } from "ConfigsRoot/colors";

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: ${colors.white};
    border: none;
    border-radius: 4px;
    
`;

export const Input = styled.input`
    width: 250px;
    height: 25px;
    padding: 0 30px;
    border: none;
    border-radius: 4px;

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