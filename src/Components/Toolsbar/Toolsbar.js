import React, { useContext } from "react";

import { ClassicButton, SvgIcon, ClassicInput } from 'ComponentsRoot';
import Context from 'UtilsRoot/Context';
import iconSvg from 'AssetsRoot/svg/iconSvg';
import { colors } from "ConfigsRoot/colors";

import { ToolsbarWrapper, ButtonsSection, SearchSection } from './StyledComponents';

const Toolsbar = () => {

    const { chosenNoteState, setSearchState, searchState, handleToggleModal, handleAddNote, setIsDisabledInput, isDisabledInput } = useContext(Context);

    const addNewNote = () => {
        const noteConfig = {
            id: Date.now(),
            noteTitle: '',
            noteText: '',
            noteDate: Date.now(),
        }
        handleAddNote(noteConfig);
    }

    return (
        <ToolsbarWrapper>
            <ButtonsSection>
                <ClassicButton
                    width='50px'
                    height='25px'
                    colorShadow={colors.create}
                    handleClick={addNewNote}
                >
                    <SvgIcon
                        width='100%'
                        height='100%'
                        viewBox='0 0 10 10'
                        path={iconSvg.plus}
                        fill={colors.secondary}
                        fillHover={colors.create}
                    />
                </ClassicButton>
                <ClassicButton
                    width='50px'
                    height='25px'
                    colorShadow={colors.reject}
                    disabled={!chosenNoteState?.id}
                    handleClick={handleToggleModal}
                >
                    <SvgIcon
                        width='100%'
                        height='100%'
                        viewBox='0 0 20 20'
                        path={iconSvg.trash}
                        fill={colors.secondary}
                        fillHover={colors.reject}
                        strokeHover='#373737'
                        stroke='#373737'
                        disabled={!chosenNoteState?.id}
                    />
                </ClassicButton>
                <ClassicButton
                    width='50px'
                    height='25px'
                    colorShadow={colors.edit}
                    disabled={!chosenNoteState?.id}
                    handleClick={() => setIsDisabledInput(!isDisabledInput)}
                >
                    <SvgIcon
                        width='100%'
                        height='100%'
                        viewBox='-2 3 25 25'
                        path={iconSvg.edit}
                        fill={colors.secondary}
                        fillHover={colors.edit}
                        disabled={!chosenNoteState?.id}
                    />
                </ClassicButton>
            </ButtonsSection>
            <SearchSection>
                <ClassicInput
                    width='45%'
                    path={iconSvg.search}
                    placeholder='Search'
                    onChange={(e) => setSearchState(e.target.value)}
                    value={searchState}
                    isSearch
                />
            </SearchSection>
        </ToolsbarWrapper>
    );
};

export default Toolsbar;