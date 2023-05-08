import React, { useEffect, useState } from 'react';
import './App.css';
import { useLiveQuery } from "dexie-react-hooks";

import Context from 'UtilsRoot/Context';

import { db, addNewNote, getAllNotes, deleteNote, editNote } from 'UtilsRoot';

import { Toolsbar, Sidebar, WorkSpace } from 'ComponentsRoot';
import { formatDate, formatFullDate } from 'UtilsRoot';
// import iconSvg from 'AssetsRoot/svg/iconSvg';
// import { colors } from "ConfigsRoot/colors";

import { Wrapper } from './StyledComponents';

function App() {

  const [newNote, setNewNote] = useState({});
  const [chosenNote, setChosenNote] = useState({});
  const [editNote, setEditNote] = useState({})
  const allNotes = useLiveQuery(() => db.notes.toArray(), []);

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
    if (Object.keys(newNote).length) {
      addNewNote(db, newNote);
    }

    if (Object.keys(editNote).length) {
      addNewNote(db, editNote);
    }

  }, [newNote, editNote])



  return (
    <Context.Provider value={{ setNewNote, allNotes, setChosenNote, chosenNote, editNote, setEditNote }}>
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
