import React from 'react';
import logo from '../../logo.svg';
	
const Friend = (props) => {
	return ( 
		   <div>
		   	  <p>{props.name}</p>
		   </div>
		  
		);
};


/////////////////////////////
const Ind = (props) => {
	let friend = props.state.friend.map( d => <Friend name={d.name} id={d.id}/>);
  return (
    <div>
        <h1>Hola Buendio!</h1>
        <h2>My Frend</h2>
        <div >
			<div className="frend_item">
				{friend}
			</div>
			
		</div>
    </div>
  );
}

export default Ind;