import styled from 'styled-components';

import { colors } from "ConfigsRoot/colors";

export const ToolsbarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 15px;
    background-color: ${colors.grey};

`;
export const ButtonsSection = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: start;
`;

export const SearchSection = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: end;
`;