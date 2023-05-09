import React, { memo } from "react";
import PropTypes from 'prop-types';

import { Button } from './StyledComponents';

const ClassicButton = memo(({ children, width, height, margin, colorShadow, handleClick, disabled, border,padding }) => {
    return (
        <Button
            width={width}
            height={height}
            margin={margin}
            colorShadow={colorShadow}
            onClick={handleClick}
            disabled={disabled}
            border={border}
            padding={padding}
        >
            {children}
        </Button>
    )
});


ClassicButton.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    margin: PropTypes.string,
    colorShadow: PropTypes.string,
    handleClick: PropTypes.func,
    disabled: PropTypes.bool,
    border: PropTypes.string,
    padding: PropTypes.string
};

ClassicButton.defaultProps = {
    width: '',
    height: '',
    margin: '',
    colorShadow: '',
    handleClick: () => { },
    disabled: false,
    border: '',
    padding: ''
};


export default ClassicButton;