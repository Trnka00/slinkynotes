import React, { useState, useEffect, createContext } from 'react';
import { v1 } from 'uuid';

export const NoteContext = createContext();

const NoteContextProvider = props => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('slinkyNotes'));
    if (!savedNotes) {
      setNotes([
        {
          title: 'Welcome to Slinky Notes!',
          text: 'Take as many notes as you want.',
          id: v1(),
        },
      ]);
    } else {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('slinkyNotes', JSON.stringify(notes));
  }, [notes]);

  const addNote = newNote => {
    const updatedNotes = [newNote, ...notes];
    setNotes(updatedNotes);
  };

  const deleteNote = deletedNote => {
    const updatedNotes = notes.filter(note => note.id !== deletedNote.id);
    setNotes(updatedNotes);
  };

  const editNote = editedNote => {
    const otherNotes = notes.filter(note => note.id !== editedNote.id);
    const updatedNotes = [editedNote, ...otherNotes];
    setNotes(updatedNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteContextProvider;
