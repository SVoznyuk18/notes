import React, { useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';

const Portal = ({ children }) => {

    // const el = document.createElement('div');

    // console.log("el", el);
    // useLayoutEffect(() => {
    //     document.body.appendChild(el);

    //     return () => {
    //         document.body.removeChild(el);
    //     }
    // }, [])

    return createPortal(children, document.body);

}

Portal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.elementType
    ]).isRequired
}

export default Portal;