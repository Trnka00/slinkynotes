import React, { useContext } from 'react';
import NoteCard from './NoteCard';
import Masonry from 'react-masonry-css';

import { NoteContext } from './../context/NoteContext';
const NoteList = () => {
  const { notes } = useContext(NoteContext);

  return (
    <Masonry
      breakpointCols={{ default: 3, 1160: 2, 850: 1 }}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {notes.map(note => (
        <NoteCard note={note} key={note.id} />
      ))}
    </Masonry>
  );
};

export default NoteList;
