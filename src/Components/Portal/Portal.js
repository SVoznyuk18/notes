import React from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';

const Portal = ({ children }) => {

    return createPortal(children, document.body);

}

Portal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.elementType
    ]).isRequired
}

export default Portal;