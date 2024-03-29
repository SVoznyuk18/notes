import React, { useRef, useEffect, useContext } from "react";

import { ClassicInput, Textarea } from 'ComponentsRoot';
import Context from 'UtilsRoot/Context';
import { formatFullDate } from 'UtilsRoot';

import { WorkSpaceWrap, WorkSpaceTitle, Form } from './StyledComponents';

const WorkSpace = () => {

    const { chosenNoteState, setChosenNoteState, handleEditNote, isDisabledInput } = useContext(Context);
    const textareaRef = useRef();
    const inputRef = useRef();

    const handleChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;

        const noteConfig = {
            ...chosenNoteState,
            [name]: value
        }
        setChosenNoteState(() => {
            return {
                ...chosenNoteState,
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
            <WorkSpaceTitle>{formatFullDate(chosenNoteState?.noteDate)}</WorkSpaceTitle>
            <Form onChange={handleChange}>
                <ClassicInput
                    width='100%'
                    height='40px'
                    id='noteTitle'
                    name='noteTitle'
                    padding='0 20px'
                    fontSize='16px'
                    fontWeight='600'
                    value={chosenNoteState?.noteTitle}
                    inputRef={inputRef}
                    disabled={isDisabledInput}

                />
                <Textarea
                    height='calc(100% - 40px - 20px)'
                    textareaRef={textareaRef}
                    value={chosenNoteState?.noteText}
                    id='noteText'
                    name='noteText'
                    disabled={isDisabledInput}
                />
            </Form>
        </WorkSpaceWrap>
    );
}

export default WorkSpace;