import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import './header.css'
import logo from '../../logo.svg';

const Header = (props) => {
  
  return (

    <header className="header">
    <Link to='/'>
      <img
          src={logo}
          alt="Logo Space X"
          className="logo"
      />
    </Link>
    <nav className="main-nav nav">
      <ul className="list">
      {props.rockets.map((item, i) => (
        <li className="item" key={i}>
          <Link to="/" className="item-link" onClick={e => {

            props.changeRocket(item);
          } } >{item}</Link>
        </li>
      ))}

      </ul>
    </nav>
    <nav className="secondary-nav">
      <ul className="list">
        <li className="item">
          <NavLink exact to="/" className="item-link">Home</NavLink>
        </li>
        <li className="item">
          <NavLink to="/calendar" className="item-link">Calendar</NavLink>
        </li>
        <li className="item">
          <NavLink to="/test" className="item-link">Test</NavLink>
        </li>
      </ul>
    </nav>
  </header>

)
}

export default Header;
