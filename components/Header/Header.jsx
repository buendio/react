import React from 'react';
import c from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <div className={c.header_wrap}>
      <NavLink to="/"><img src="https://s1.1zoom.ru/prev2/536/Tigers_Painting_Art_Night_Glance_535374_300x200.jpg" /></NavLink>
      <NavLink to="/main" activeClassName={c.active} className={c.item}>Main { props.mes } { props.les } { props.ses }</NavLink>
      <NavLink to="/dialogs" activeClassName={c.active} className={c.item}>Dialogs</NavLink>
    </div>
  );
}

export default Header;