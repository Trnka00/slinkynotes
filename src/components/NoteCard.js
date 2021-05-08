import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import deleteIcon from './../img/delete.svg';
import editIcon from './../img/edit.svg';
import { NoteContext } from './../context/NoteContext';

const NoteCard = props => {
  const { deleteNote } = useContext(NoteContext);
  const history = useHistory();

  return (
    <div className="note-card">
      <div className="note-heading">
        <h3>{props.note.title}</h3>
        <div className="btn-wrap">
          <img
            onClick={() => deleteNote(props.note)}
            src={deleteIcon}
            alt="delete"
          />
          <img
            onClick={() => history.push(`/edit/${props.note.id}`)}
            src={editIcon}
            alt="edit"
          />
        </div>
      </div>
      <p className="note-paragraph">{props.note.text}</p>
    </div>
  );
};

export default NoteCard;
