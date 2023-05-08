import moment from 'moment';
import Dexie from 'dexie';
import { useLiveQuery } from "dexie-react-hooks";



export const formatDate = (noteDate) => {
    const dayMs = 24 * 60 * 60 * 1000;
    const currentDate = Date.now();
    let formatedDate = '';

    if ((currentDate - noteDate) > dayMs) {
        formatedDate = moment(noteDate).format('MM/DD/YY');
    } else {
        formatedDate = moment(noteDate).format('h:mm a');
    }

    return formatedDate;
}

export const formatFullDate = (noteDate) => {
    const formatedFullDate = moment(noteDate).format('MMMM Do YYYY, h:mm a');
    return formatedFullDate;
}

export const db = new Dexie('notesDb');
db.version(1).stores({
    notes: '++id, id, noteTitle, noteText, noteDate'
});


export const addNewNote = async (db, noteConfig) => {
    try {
        await db.notes.put(noteConfig);
    } catch {
        console.log('erros addNewNote');
    }
    
}

// export const getAllNotes = (db,setAllNotes) => {
//     const allNotes = useLiveQuery(() => db.notes.toArray(), []);
//     setAllNotes(allNotes);
// }

export const deleteNote = async (db, id) => db.notes.delete(id);

export const editNote = async (db, id, noteConfig) => {
    await db.notes.update(id, noteConfig);
}