import React, {memo} from "react";
import PropTypes from 'prop-types';

import { Button } from './StyledComponents';

const ClassicButton = memo(({ children, width, height, margin, colorShadow, handleClick }) => {
    return (
        <Button
            width={width}
            height={height}
            margin={margin}
            colorShadow={colorShadow}
            onClick={handleClick}
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
};

ClassicButton.defaultProps = {
    width: '',
    height: '',
    margin: '',
    colorShadow: '',
    handleClick: () => { }
};


export default ClassicButton;