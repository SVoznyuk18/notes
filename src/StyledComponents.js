import styled from "styled-components";

import { media } from 'ConfigsRoot/constants';

export const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height:  calc(100vh - 35px);
    padding: 10px;
    overflow: hidden;

    ${media.mobile} {
        padding: 5px;
    }

    ${media.mobileS} {
        height:  calc(100vh - 65px);
        flex-direction: column;
    }
`;