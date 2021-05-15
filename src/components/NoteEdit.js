import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { NoteContext } from './../context/NoteContext';
import NoteCreateCss from './NoteCreate/NoteCreate.module.css';

const NoteEdit = props => {
  const { notes, editNote } = useContext(NoteContext);
  const history = useHistory();

  const editedNote = notes.filter(note => note.id === props.match.params.id)[0];

  const [title, setTitle] = useState(editedNote.title);
  const [text, setText] = useState(editedNote.text);

  const handleSubmit = e => {
    e.preventDefault();
    editedNote.title = title;
    editedNote.text = text;
    editNote(editedNote);
    delete history.push('/');
  };

  return (
    <div className={NoteCreateCss['note-create']}>
      <h2 className={NoteCreateCss['create-title']}>Edit Note</h2>
      <form
        onSubmit={handleSubmit}
        action="submit"
        className={NoteCreateCss['create-form']}
      >
        <label className={NoteCreateCss['title-label']}>title:</label>
        <br />
        <input
          required
          onChange={e => setTitle(e.target.value)}
          type="text"
          value={title}
        />
        <br />
        <label className={NoteCreateCss['text-label']}>text:</label>
        <br />
        <textarea
          required
          onChange={e => setText(e.target.value)}
          type="text"
          value={text}
        />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
};

export default NoteEdit;
