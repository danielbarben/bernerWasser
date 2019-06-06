import React from 'react';
import './Header.css';
import Logoheader from '../../img/logoheader.png'

function Header() {
  return (<div className='Header'>
    <a href="https://bernerzeitung.ch" target="_blank" rel="noopener noreferrer">
      <img src={Logoheader} className='Logoheader' key='12' alt='BZ Berner Zeitung'/>
    </a>
  </div>)
}

export default Header;
