import React, { useEffect, useState } from 'react';

import { Toolsbar, Sidebar, WorkSpace, Portal, Modal } from 'ComponentsRoot';
import Context from 'UtilsRoot/Context';
import { add, del, update, get, getById } from 'UtilsRoot/db';
import { Wrapper } from './StyledComponents';

function App() {

  const [allNotes, setAllNotes] = useState([]);
  const [chosenNoteState, setChosenNoteState] = useState({});
  const [editNoteState, setEditNoteState] = useState({});
  const [searchState, setSearchState] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const filteredNotes = allNotes?.filter(note => note?.noteTitle.includes(searchState));

  const handleGet = async () => {
    const notes = await get();
    setAllNotes(notes);
  }

  const handleAddNote = (id, params) => {
    add(id, params);
    handleGet();
  }

  const handleEditNote = (id, params) => {
    update(id, params);
    handleGet();
  }

  const handleDeleteNote = (id) => {
    del(id);
    handleToggleModal();
    handleGet();
  }

  const handleGetById = async (id) => {
    const note = await getById(id);
    setEditNoteState({
      id: note[0]?.id,
      noteDate: note[0]?.id,
      noteTitle: note[0]?.noteTitle,
      noteText: note[0]?.noteText
    });
  }

  const handleToggleModal = () => {
    setIsOpenModal(!isOpenModal);
  }

  useEffect(() => {
    handleGet();
  }, [])

  return (
    <Context.Provider value={{ filteredNotes, setChosenNoteState, chosenNoteState, editNoteState, setSearchState, searchState, isOpenModal, handleDeleteNote, handleToggleModal, handleAddNote, handleEditNote, handleGetById, setEditNoteState }}>
      <>
        <Toolsbar />
        <Wrapper>
          <Sidebar />
          <WorkSpace />
        </Wrapper>
        <Portal>
          <Modal />
        </Portal>
      </>
    </Context.Provider>
  );
}

export default App;
