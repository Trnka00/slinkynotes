import React from 'react';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { v1 } from 'uuid';

import { NoteContext } from '../../context/NoteContext';
import NoteCreateCss from './NoteCreate.module.css';

const NoteCreate = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const { addNote } = useContext(NoteContext);
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    addNote({ title, text, id: v1() });
    history.push('/');
  };

  return (
    <div className={NoteCreateCss['note-create']}>
      <h2 className={NoteCreateCss['create-title']}>Create Note</h2>
      <form
        action="submit"
        onSubmit={handleSubmit}
        className={NoteCreateCss['create-form']}
      >
        <label className={NoteCreateCss['title-label']}>add a title:</label>
        <br />
        <input
          required
          onChange={e => setTitle(e.target.value)}
          type="text"
          value={title}
        />
        <br />
        <label className={NoteCreateCss['text-label']}>write text:</label>
        <br />
        <textarea
          required
          onChange={e => setText(e.target.value)}
          type="text"
          value={text}
        />
        <br />
        <button>Add a Note</button>
      </form>
    </div>
  );
};

export default NoteCreate;
