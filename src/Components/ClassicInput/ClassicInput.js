import React from "react";
import PropTypes from 'prop-types';

import { SvgIcon } from 'ComponentsRoot';
import { colors } from "ConfigsRoot/colors";

import { InputWrapper, Input, SvgWrap } from './StyledComponents';

const ClassicInput = ({ path, placeholder }) => {
    return (
        <InputWrapper>

            <Input
                placeholder={placeholder}


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
    path: PropTypes.string
    // handleClick: PropTypes.func,
};

ClassicInput.defaultProps = {
    width: '',
    height: '',
    margin: '',
    colorShadow: '',
    path: ''
    // handleClick: () => { }
};

export default ClassicInput;