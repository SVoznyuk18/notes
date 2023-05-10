import styled, { css } from "styled-components";

import { colors } from "ConfigsRoot/colors";
import { media } from 'ConfigsRoot/constants';

export const Button = styled.button`
    width: ${props => props.width || '50px'};
    height: ${props => props.height || '25px'};
    padding: ${props => props.padding || '3px 2px'};
    margin: ${props => props.margin || '0px'};
    background-color: ${colors.primary};
    border: ${props => props.border || 'none'};
    border-radius: 4px;
    cursor: pointer;

    ${props => !props.disabled && css`
        &:hover {
            box-shadow:  ${props => props.colorShadow ? `${props.colorShadow} 0px 3px 3px 0px, ${props.colorShadow} 0px 4px 6px 0px` : ''};
        }

        &:active {
            transform: translate(0px, 2px);
        }
    `}
    
    ${props => !props.isModal && css`
        ${media.tablet} {
            width: 40px;
        }

        ${media.mobile} {
            width: 30px;
        }

        ${media.mobileS} {
            width: 50px;
        }
    `}
`;