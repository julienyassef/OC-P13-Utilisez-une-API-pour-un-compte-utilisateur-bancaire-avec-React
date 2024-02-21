//CSS
import './Header.scss'

//Assets
import logo from '../../../assets/argentBankLogo.png'

//React
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='NavBar'>
      <Link className='NavBar__Logo' to="/"> 
        <img
          src={logo}
          className="NavBar__Logo__img"
          alt="Logo ArgentBank"
        />
      </Link>
      <h1 className="sr-only">Argent Bank</h1>
      <Link className='NavBar__Login' to="/SignIn">
        <i className="fa fa-user-circle"></i>&nbsp;
        Sign In
      </Link>
    </nav>
  )
}
export default Header
