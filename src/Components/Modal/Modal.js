import React, { useContext } from "react";
import PropTypes from 'prop-types';

import Context from 'UtilsRoot/Context';
import { SvgIcon, ClassicButton } from 'ComponentsRoot';
import iconSvg from 'AssetsRoot/svg/iconSvg';
import { ModalWrapper, ModalContainer, CloseButton, ModalContent, ModalTitle, ButtonSection } from './StyledComponents';
import { colors } from "ConfigsRoot/colors";

const Modal = () => {

    const { isOpenModal, chosenNoteState, handleDeleteNote, handleToggleModal } = useContext(Context);

    return (
        <ModalWrapper isOpenModal={isOpenModal}>
            <ModalContainer>
                <CloseButton onClick={handleToggleModal}>
                    <SvgIcon
                        width='18'
                        height='18'
                        viewBox='0 0 9 9'
                        path={iconSvg.cancel}
                    />
                </CloseButton>
                <ModalContent>
                    <ModalTitle>Ви впевнені, що хочете видалити нотаток "{chosenNoteState?.noteTitle}"</ModalTitle>
                    <ButtonSection>
                        <ClassicButton
                            width='auto'
                            height='auto'
                            border={`solid 2px ${colors.create}`}
                            handleClick={() => handleDeleteNote(chosenNoteState?.id)}
                            isModal
                        >
                            Видалити
                        </ClassicButton>
                        <ClassicButton
                            width='auto'
                            height='auto'
                            border={`solid 2px ${colors.reject}`}
                            handleClick={handleToggleModal}
                            isModal
                        >
                            Скасувати
                        </ClassicButton>
                    </ButtonSection>
                </ModalContent>
            </ModalContainer>
        </ModalWrapper>
    )
};

Modal.propTypes = {
    isOpenModal: PropTypes.bool,
    onCloseModal: PropTypes.func,
}

Modal.defaultProps = {
    isOpenModal: false,
    onCloseModal: () => { }
}

export default Modal;