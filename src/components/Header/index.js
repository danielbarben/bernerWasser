import React from 'react';
import './Header.css';
import Logoheader from '../../img/logoheader.png'

function Header() {
  return (<div className='Header'><img src={Logoheader} className='Logoheader' key='12' alt='digitalOrakel'/></div>)
  //return (<div className="Header"><h1>BernerWasser</h1><p>ein Quiz der BZ Berner Zeitung</p></div>)
}

export default Header;
