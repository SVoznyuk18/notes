import styled from 'styled-components';

import { colors } from "ConfigsRoot/colors";
import { media } from 'ConfigsRoot/constants';

export const ToolsbarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    background-color: ${colors.secondary};

    ${media.mobileS} {
        flex-direction: column;
    }
`;

export const ButtonsSection = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${media.mobileS} {
        width: 100%;
        margin-bottom: 5px;
        justify-content: space-evenly;
    }
`;

export const SearchSection = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: end;

    ${media.mobileS} {
        width: 100%;
    }
`;