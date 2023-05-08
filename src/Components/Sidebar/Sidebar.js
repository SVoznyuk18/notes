import React, { useContext } from "react";

import { formatDate } from 'UtilsRoot';
import Context from 'UtilsRoot/Context';
import { NotesList, NoteItem, NoteTitle, NoteDescription, NoteDate, NoteText } from './StyleComponents';

const Sidebar = () => {

    const { allNotes, chosenNoteState, setChosenNoteState } = useContext(Context);


        return (
        <NotesList>
            {allNotes?.length > 0 && allNotes?.map(note => (
                <NoteItem active={chosenNoteState?.id === note?.id} key={note?.id} onClick={() => setChosenNoteState(note)}>
                    <NoteTitle>{note?.noteTitle}</NoteTitle>
                    <NoteDescription>
                        <NoteDate>{formatDate(note?.noteDate)}</NoteDate>
                        <NoteText>{note?.noteText}</NoteText>
                    </NoteDescription>

                </NoteItem>
            ))}
        </NotesList>
    )
}

export default Sidebar;
