import React from 'react';
import { useHistory } from 'react-router-dom';

import SidebarCss from './Sidebar.module.css';

const Sidebar = () => {
  const history = useHistory();
  return (
    <div className={SidebarCss.sidebar}>
      <button onClick={() => history.push('/')}>My Notes</button>
      <button onClick={() => history.push('/create')}>Create Note</button>
    </div>
  );
};

export default Sidebar;
