import React, {forwardRef, useRef} from "react";
import PropTypes from 'prop-types';

import { TextareaInput } from './StyledComponents';

const Textarea = ({ width, height, padding, fontSize, fontWeight, onChange, onClick, textareaRef, id, name, value } ) => {

    return (
        <TextareaInput
            width={width}
            height={height}
            fontSize={fontSize}
            fontWeight={fontWeight}
            padding={padding}
            ref={textareaRef}
            onChange={onChange}
            onClick={onClick}
            id={id}
            name={name}
            value={value}
        />
    )
};

Textarea.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    padding: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
    textareaRef: PropTypes.object,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string
    // handleClick: PropTypes.func,
};

Textarea.defaultProps = {
    width: '',
    height: '',
    padding: '',
    fontSize: '16px',
    fontWeight: '400',
    textareaRef: {},
    onChange: () => { },
    onClick: () => { },
    id: '',
    name: '',
    value: ''
    // handleClick: () => { }
};

export default Textarea;