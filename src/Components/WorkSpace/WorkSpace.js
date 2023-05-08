import React, { useRef, useEffect, useContext } from "react";

import { ClassicInput, Textarea } from 'ComponentsRoot';
import Context from 'UtilsRoot/Context';
import { formatFullDate } from 'UtilsRoot';

import { WorkSpaceWrap, WorkSpaceTitle, Form } from './StyledComponents';

const WorkSpace = () => {

    const { editNote, setEditNote } = useContext(Context);
    const textareaRef = useRef();
    const inputRef = useRef();

    const handleChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setEditNote(()=> {
            return {
                ...editNote,
                [name]: value
            }
        })
    }

    const handleClick = (e) => {

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
    }, []
    );

    return (
        <WorkSpaceWrap>
            <WorkSpaceTitle>{formatFullDate(editNote?.noteDate)}</WorkSpaceTitle>
            <Form onChange={handleChange}>
                <ClassicInput
                    width='100%'
                    height='40px'
                    id='noteTitle'
                    name='noteTitle'
                    padding='0 20px'
                    fontSize='16px'
                    fontWeight='600'
                    value={editNote?.noteTitle}
                    // onChange={handleChange}
                    onClick={handleClick}
                    inputRef={inputRef}
                    disabled={!editNote?.id}

                />
                <Textarea
                    textareaRef={textareaRef}
                    // onChange={handleChange}
                    value={editNote?.noteText}
                    onClick={handleClick}
                    id='noteText'
                    name='noteText'
                    disabled={!editNote?.id}
                />
            </Form>

        </WorkSpaceWrap>

    );
}

export default WorkSpace;