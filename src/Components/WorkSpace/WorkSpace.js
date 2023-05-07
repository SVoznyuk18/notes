import React, { useRef, useEffect } from "react";

import { ClassicInput, Textarea } from 'ComponentsRoot';
import { formatFullDate } from 'UtilsRoot';

import { WorkSpaceWrap, WorkSpaceTitle } from './StyledComponents';

const WorkSpace = () => {

    const textareaRef = useRef();
    const inputRef = useRef();

    const handleChange = (e) => {
    }

    const handleClick = (e) => {
    }

    const handleChangeFocus = ({ code }) => {
        if (code === 'Enter' && inputRef.current.id === 'noteTitleId') {
            textareaRef.current.focus();
        }
        if (textareaRef.current.id === 'textarea' && inputRef.current.value === '' && code !== 'Backspace') {
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
            <WorkSpaceTitle>{formatFullDate(1683473529727)}</WorkSpaceTitle>
            <ClassicInput
                width='100%'
                height='40px'
                id='noteTitleId'
                padding='0 20px'
                fontSize='16px'
                fontWeight='600'
                onChange={handleChange}
                onClick={handleClick}
                inputRef={inputRef}
            />
            <Textarea
                textareaRef={textareaRef}
                onChange={handleChange}
                onClick={handleClick}
                id='textarea'
            />
        </WorkSpaceWrap>

    );
}

export default WorkSpace;