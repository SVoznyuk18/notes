import React from "react";
import PropTypes from 'prop-types';

import { SvgIcon } from 'ComponentsRoot';
import { colors } from "ConfigsRoot/colors";

import { InputWrapper, Input, SvgWrap } from './StyledComponents';

const ClassicInput = ({ path, width, height, padding, placeholder, fontSize, fontWeight, onChange, onClick, id, inputRef, name, value }) => {
    return (
        <InputWrapper
            width={width}
            height={height}
        >
            <Input
                placeholder={placeholder}
                name={name}
                width={width}
                height={height}
                fontSize={fontSize}
                fontWeight={fontWeight}
                padding={padding}
                onChange={onChange}
                onClick={onClick}
                id={id}
                ref={inputRef}
                value={value}
            />
            <If condition={path}>
                <SvgWrap>
                    <SvgIcon
                        width='20px'
                        height='20px'
                        viewBox='3 3 20 20'
                        path={path}
                        fill={colors.grey}
                        fillHover={colors.green}
                    />
                </SvgWrap>
            </If>
        </InputWrapper>
    );
}

ClassicInput.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    margin: PropTypes.string,
    colorShadow: PropTypes.string,
    padding: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
    path: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    id: PropTypes.string,
    inputRef: PropTypes.object,
    name: PropTypes.string,
    value: PropTypes.string
    // handleClick: PropTypes.func,
};

ClassicInput.defaultProps = {
    width: '',
    height: '',
    margin: '',
    colorShadow: '',
    padding: '',
    fontSize: '14px',
    fontWeight: '400',
    path: '',
    onChange: () => { },
    onClick: () => { },
    id: '',
    inputRef: {},
    name: '',
    value: ''
    // handleClick: () => { }
};

export default ClassicInput;