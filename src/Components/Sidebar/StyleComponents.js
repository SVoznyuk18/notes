import styled from "styled-components";

import { colors } from "ConfigsRoot/colors";

export const NotesList = styled.div`
    width: 30%;
    height:  100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-right: 10px;
    overflow-x: hidden;
    overflow-y: scroll;
`;
export const NoteItem = styled.div`
    width: 100%;
    min-height: 70px;
    padding: 10px 25px;
    margin-bottom: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 4px;
    cursor: pointer;
    background-color: ${colors.grey};

    &:active {
        transform: translate(0px, 2px);
    }
`;

export const NoteTitle = styled.div`
    width: 100%;
    margin-bottom: 15px;
    font-size: 16px;
    line-height: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
`;
export const NoteDescription = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
export const NoteDate = styled.div`
    font-size: 16px;
    line-height: 16px;
    margin-right: 15px;
`;
export const NoteText = styled.div`
    font-size: 16px;
    line-height: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;