import React, {useContext} from "react";
import PropTypes from 'prop-types';

import Context from 'UtilsRoot/Context';
import { SvgIcon } from 'ComponentsRoot';
import iconSvg from 'AssetsRoot/svg/iconSvg';
import { ModalWrapper, ModalContent, CloseButton, ModalText } from './StyledComponents';

const Modal = () => {

    const { setIsOpenModal, isOpenModal } = useContext(Context);
    
    console.log(isOpenModal)
    return (
        <ModalWrapper isOpenModal={isOpenModal}>
            <ModalContent>
                <CloseButton onClick={() => setIsOpenModal(!isOpenModal)}>
                    <SvgIcon
                        width='18'
                        height='18'
                        viewBox='0 0 9 9'
                        path={iconSvg.cancel}
                    />
                </CloseButton>
                <ModalText>
                        some text
                </ModalText>
            </ModalContent>
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