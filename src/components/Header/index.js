import React from 'react';
import './Header.css';
import Logoheader from '../../img/logoheader.png'

function Header() {
  return (<div className='Header'><a href="http://bernerzeitung.ch" target="_blank"><img src={Logoheader} className='Logoheader' key='12' alt='BZ Berner Zeitung'/></a></div>)
  //return (<div className="Header"><h1>BernerWasser</h1><p>ein Quiz der BZ Berner Zeitung</p></div>)
}

export default Header;
