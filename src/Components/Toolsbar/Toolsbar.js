import React, { useContext } from "react";

import { ClassicButton, SvgIcon, ClassicInput } from 'ComponentsRoot';
import Context from 'UtilsRoot/Context';
import iconSvg from 'AssetsRoot/svg/iconSvg';
import { colors } from "ConfigsRoot/colors";

import { ToolsbarWrapper, ButtonsSection, SearchSection } from './StyledComponents';

const Toolsbar = () => {

    const { chosenNoteState, setSearchState, searchState, handleToggleModal, handleAddNote, handleGetById } = useContext(Context);

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
                    margin='0 15px 0 0'
                    colorShadow={colors.green}
                    handleClick={addNewNote}
                >
                    <SvgIcon
                        width='100%'
                        height='100%'
                        viewBox='0 0 10 10'
                        path={iconSvg.plus}
                        fill={colors.grey}
                        fillHover={colors.green}
                    />
                </ClassicButton>
                <ClassicButton
                    width='50px'
                    height='25px'
                    margin='0 15px 0 0'
                    colorShadow={colors.orange}
                    disabled={!chosenNoteState?.id}
                    handleClick={handleToggleModal}
                >
                    <SvgIcon
                        width='100%'
                        height='100%'
                        viewBox='0 0 20 20'
                        path={iconSvg.trash}
                        fill={colors.grey}
                        fillHover={colors.orange}
                        strokeHover='#373737'
                        stroke='#373737'
                        disabled={!chosenNoteState?.id}
                    />
                </ClassicButton>
                <ClassicButton
                    width='50px'
                    height='25px'
                    margin='0 15px 0 0'
                    colorShadow={colors.ultramarine}
                    disabled={!chosenNoteState?.id}
                    handleClick={() => handleGetById({id: chosenNoteState?.id})}
                >
                    <SvgIcon
                        width='100%'
                        height='100%'
                        viewBox='-2 3 25 25'
                        path={iconSvg.edit}
                        fill={colors.grey}
                        fillHover={colors.ultramarine}
                        disabled={!chosenNoteState?.id}
                    />
                </ClassicButton>
            </ButtonsSection>
            <SearchSection>
                <ClassicInput
                    path={iconSvg.search}
                    placeholder='Search'
                    onChange={(e) => setSearchState(e.target.value)}
                    value={searchState}
                />
            </SearchSection>
        </ToolsbarWrapper>
    );
};

export default Toolsbar;