import React from 'react';

import HeaderCss from './Header.module.css';
import accountIcon from './../../img/account.svg';

const Header = () => {
  return (
    <div className={HeaderCss.header}>
      <h1>Slinky Notes</h1>
      <img src={accountIcon} alt="" />
    </div>
  );
};

export default Header;
