import React from 'react';
import c from './Dialogs.module.css';
const Mesage = (props) => {
	return (
		   <p className={c.item_mesage}>{props.name}</p>
		 
		);
}

export default Mesage;