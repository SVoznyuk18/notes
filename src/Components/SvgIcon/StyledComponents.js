import styled, {css} from "styled-components";

export const Svg = styled.svg`
    margin: ${props => props.margin};
    width: ${props => props.width};
    height: ${props => props.height};
    fill: ${props => props.fill || 'currentColor'};

    path {
        stroke: ${props => props.stroke};
    };

    ${props => !props.disabled && css`
        &:hover {
            fill: ${props => props.fillHover};
            path {
                stroke: ${props => props.strokeHover};
            };
        }
    `}
`;