import React from 'react';
import accountIcon from './../img/account.svg';

const Header = () => {
  return (
    <div className="header">
      <h1>Slinky Notes</h1>
      <img src={accountIcon} alt="" />
    </div>
  );
};

export default Header;
