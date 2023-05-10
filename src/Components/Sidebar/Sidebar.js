import React, { useContext } from "react";

import { formatDate } from 'UtilsRoot';
import Context from 'UtilsRoot/Context';
import { NotesList, NoteItem, NoteTitle, NoteDescription, NoteDate, NoteText } from './StyleComponents';

const Sidebar = () => {

    const { filteredNotes, chosenNoteState, setChosenNoteState, setIsDisabledInput } = useContext(Context);

    const handleChosenNote = (note) => {
        setChosenNoteState(prev => {
            if (prev?.id !== note?.id) setIsDisabledInput(true);
            return note;
        })
    }

    return (
        <NotesList>
            {filteredNotes?.length > 0 && filteredNotes?.map(note => (
                <NoteItem active={chosenNoteState?.id === note?.id} key={note?.id} onClick={() => handleChosenNote(note)}>
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
