import styled from "styled-components";

import { colors } from "ConfigsRoot/colors";
import { media } from 'ConfigsRoot/constants';

export const WorkSpaceWrap = styled.div`
    width: 70%;
    height:  100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-left: 5px;
    background-color: ${colors.primary};
    border-radius: 4px;

    ${media.mobile} {
        width: 60%;
    }

    ${media.mobileS} {
        width: 100%;
        height:  60%;
        margin: 0;
    }
`;

export const WorkSpaceTitle = styled.div`
    width: 100%;
    height: 20px;
    font-size: 18px;
    line-height: 18px;
    font-weight: 600;
    color: grey;
    letter-spacing: 2px;
    background-color: ${colors.primary};
    text-align: center;
`;

export const Form = styled.form`
    width: 100%;
    height: 100%;
`