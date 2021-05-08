import React from 'react';
import { useHistory } from 'react-router-dom';

const Sidebar = () => {
  const history = useHistory();
  return (
    <div className="sidebar">
      <button onClick={() => history.push('/')}>My Notes</button>
      <button onClick={() => history.push('/create')}>Create Note</button>
    </div>
  );
};

export default Sidebar;
