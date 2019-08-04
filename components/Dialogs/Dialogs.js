import React from 'react';
import c from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Mesage from './Mesage.jsx'

const Dialogs_item = (props) => {
      return (
      	    <NavLink to={"/dialogs/" + props.id} className={c.item+' '+c.active}>{props.name}</NavLink>
      	    
      	);
}




// let mesage_data = [
//         {id:1 , name: 'blb bla bla'},
//         {id:2 , name:'cy cy cy'},
//         {id:3 , name: 'yo oy oy'},
//         {id:4 , name:'1111'},
//      ]

const Dialogs = (props) => {
	
     let mesage_el = props.state.mesage_data.map( d => <Mesage name={d.name} id={d.id}/>);
	let dialog_el = props.state.dialog_data.map( d => <Dialogs_item name={d.name} id={d.id}/>);
	
	
	return (
		<div className={c.dialogs}>
			<div className="dialogs_item">
				{dialog_el}
			</div>
			<div className="mesage">
                {mesage_el}
			</div>
		</div>
		);
}

export default Dialogs;