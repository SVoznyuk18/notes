import React, { useRef, useEffect, useContext } from "react";

import { ClassicInput, Textarea } from 'ComponentsRoot';
import Context from 'UtilsRoot/Context';
import { formatFullDate } from 'UtilsRoot';

import { WorkSpaceWrap, WorkSpaceTitle, Form } from './StyledComponents';

const WorkSpace = () => {

    const { editNoteState, setEditNoteState, chosenNoteState, handleEditNote } = useContext(Context);
    const textareaRef = useRef();
    const inputRef = useRef();

    const handleChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;

        const noteConfig = {
            ...editNoteState,
            [name]: value
        }
        setEditNoteState(() => {
            return {
                ...editNoteState,
                [name]: value
            }
        })
        handleEditNote(chosenNoteState?.id, noteConfig)
    }

    const handleChangeFocus = ({ code }) => {
        if (code === 'Enter' && inputRef.current.id === 'noteTitle') {
            textareaRef.current.focus();
        }
        if (textareaRef.current.id === 'noteText' && inputRef.current.value === '' && code !== 'Backspace') {
            inputRef.current.focus();
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleChangeFocus);

        return () => {
            window.removeEventListener('keydown', handleChangeFocus);
        };
    }, []);

    return (
        <WorkSpaceWrap>
            <WorkSpaceTitle>{formatFullDate(editNoteState?.noteDate)}</WorkSpaceTitle>
            <Form onChange={handleChange}>
                <ClassicInput
                    width='100%'
                    height='40px'
                    id='noteTitle'
                    name='noteTitle'
                    padding='0 20px'
                    fontSize='16px'
                    fontWeight='600'
                    value={editNoteState?.noteTitle}
                    inputRef={inputRef}
                    disabled={!editNoteState?.id}

                />
                <Textarea
                    textareaRef={textareaRef}
                    value={editNoteState?.noteText}
                    id='noteText'
                    name='noteText'
                    disabled={!editNoteState?.id}
                />
            </Form>
        </WorkSpaceWrap>
    );
}

export default WorkSpace;