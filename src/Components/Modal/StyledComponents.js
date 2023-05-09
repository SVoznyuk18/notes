import styled from 'styled-components';
import { colors } from 'ConfigsRoot/colors';

export const ModalWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    transform: ${props => (props.isOpenModal ? 'scale(1)' : 'none')};
    z-index: ${props => (props.isOpenModal ? '99999' : -'10')};
    opacity: ${props => (props.isOpenModal ? 1 : 0)};


`;

export const ModalContainer = styled.div`
    position: relative;
    width: 300px;
    padding: 20px;
    background-color: ${colors.white};
    border-radius: 20px;

`;

export const CloseButton = styled.div`
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;

    svg {
        fill: ${colors.black};
    }

    &: hover {
        svg {
            fill: ${colors.orange};
        }
    }
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    aline-items: center;

`;

export const ModalTitle = styled.div`
    text-align: center;
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
`;

export const ButtonSection = styled.div`
    display: flex;
    justify-content: space-around;
    aline-items: center;
    width: 100%;

`;