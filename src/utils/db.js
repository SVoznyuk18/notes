import Dexie from 'dexie';

const db = new Dexie('notesDb');
db.version(1).stores({ notes: 'id, noteTitle, noteText ,noteDate' });

const add = async params => {
    await db.notes.add(params);
};

const del = async id => {
    await db.notes.delete(id);
};

const update = async (id, params) => {
    await db.notes.update(id, params);
};

const get = async () => {
    return await db.notes.toArray();
};

const getById = async query => {
    return await db.notes.where({ ...query }).toArray();
};

export { add, del, update, get, getById };