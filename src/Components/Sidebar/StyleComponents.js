import styled from "styled-components";

import { colors } from "ConfigsRoot/colors";
import { media } from 'ConfigsRoot/constants';

export const NotesList = styled.div`
    width: 30%;
    height:  100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-right: 5px;
    overflow-x: hidden;
    overflow-y: scroll;

    ${media.mobile} {
        width: 40%;
    }

    ${media.mobileS} {
        width: 100%;
        height: 40%;
        margin-bottom: 10px;
    }
`;

export const NoteItem = styled.div`
    width: 100%;
    min-height: 60px;
    padding: 10px 25px;
    margin-bottom: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    cursor: pointer;
    background-color: ${props => props.active ? colors.secondary : colors.primary};

    &:active {
        transform: translate(0px, 2px);
    }

    ${media.tabletL} {
        min-height: 45px;
        padding: 5px 10px;
    }
`;

export const NoteTitle = styled.div`
    width: 100%;
    font-size: 16px;
    line-height: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
    text-align: left;

    ${media.tabletL} {
        font-size: 14px;
        line-height: 14px;
    }

    ${media.mobile} {
        font-size: 12px;
        line-height: 12px;
    }
`;

export const NoteDescription = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const NoteDate = styled.div`
    min-width: 65px;
    font-size: 16px;
    line-height: 16px;
    margin-right: 15px;
    text-align: left;

    ${media.tabletL} {
        font-size: 14px;
        line-height: 14px;
        margin-right: 5px;
    }

    ${media.mobile} {
        font-size: 12px;
        line-height: 12px;
    }
`;

export const NoteText = styled.div`
    // width: 70%;
    font-size: 16px;
    line-height: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;

    ${media.tabletL} {
        font-size: 14px;
        line-height: 14px;
    }

    ${media.mobile} {
        font-size: 12px;
        line-height: 12px;
    }
`;