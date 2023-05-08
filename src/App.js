import React, { useEffect, useState } from 'react';
import './App.css';
import { useLiveQuery } from "dexie-react-hooks";

import Context from 'UtilsRoot/Context';

import { db, addNewNote, getAllNotes, deleteNote, editNote } from 'UtilsRoot';

import { Toolsbar, Sidebar, WorkSpace } from 'ComponentsRoot';
import { formatDate, formatFullDate } from 'UtilsRoot';

import { Wrapper } from './StyledComponents';

function App() {

  const [newNoteState, setNewNoteState] = useState({});
  const [chosenNoteState, setChosenNoteState] = useState({});
  const [editNoteState, setEditNoteState] = useState({});
  const [deleteNoteState, setDeleteNoteState] = useState({});
  const [searchState, setSearchState] = useState('');

  const allNotes = useLiveQuery(() => db.notes.toArray(), []);
  const filteredNotes = allNotes?.filter(note => note?.noteTitle.includes(searchState));

  console.log(filteredNotes);

  const config = {
    id: 99992,
    noteTitle: 'test 22222',
    noteText: 'abrbrbrbbrbr',
    noteDate: 1234567
  }

  //   const getAllNotes = (db) => {
  //     const allNotes = useLiveQuery(() => db.notes.toArray(), []);
  //     return allNotes;
  // }
  // const allNotes = useLiveQuery(() => db.notes.toArray(), []);
  // useEffect(() => {
  //   setEditNote(chosenNote);
  // }, [chosenNote])


  useEffect(() => {
    if (Object.keys(newNoteState).length) {
      addNewNote(db, newNoteState);
    }

    if (Object.keys(editNoteState).length) {
      addNewNote(db, editNoteState);
    }

    if (Object.keys(deleteNoteState).length) {
      deleteNote(db, deleteNoteState?.id);
    }

  }, [newNoteState, editNoteState, deleteNoteState])



  return (
    <Context.Provider value={{ setNewNoteState, filteredNotes, setChosenNoteState, chosenNoteState, editNoteState, setEditNoteState, setDeleteNoteState, setSearchState, searchState }}>
      <div className="App">
        <Toolsbar />
        <Wrapper>
          <Sidebar />
          <WorkSpace />
        </Wrapper>
      </div>
    </Context.Provider>
  );
}

export default App;
