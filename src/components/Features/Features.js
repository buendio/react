import React from 'react';
import './features.css'

const rocketImages ={
	'Falcon 1': 'falcon-1',
  'Falcon 9': 'falcon-9',
  'Falcon Heavy': 'falcon-heavy',
  'Starship': 'starship',
}
const Features = (props) => {
	
	let main = React.createRef();

 
  document.addEventListener('click', (e) => {
		if (e.target.classList.contains('logo')) {
			console.log(main.current);
		}
	})
    
	return (
 
	<section className="features" ref={main} >
		<h2 className="features-title">{props.name}
	 <br/>Overview
		</h2>
		<div className="overview">

			<table className="table">
				<caption className="table-title">
					Size
				</caption>
				<thead>
					<tr>
						<td className="table-column">HEIGHT</td>
						<td className="table-column">{props.height.meters}m / {props.height.feet}ft	</td> 
					</tr>
					<tr>
						<td className="table-column">DIAMETER</td>
						<td className="table-column">{props.diameter.meters} m / {props.diameter.feet} ft</td>
					</tr>
					<tr>
						<td className="table-column">MASS</td>
						<td className="table-column">{props.mass.kg} kg / {props.mass.lb} lb</td>
					</tr>
				
					{props.payload_weights.map((i) => (
						<tr key={i.id}>
							<td className="table-column">PAYLOAD TO {i.id.toUpperCase()}</td>
							<td className="table-column">{i.kg} kg / {i.lb} lb</td>
						</tr>
					))}
						
					
				</thead>
			</table>

			<img
					src={`./img/${rocketImages[props.name]}.png`}
					alt="rocket"
					className="rocket"
					data-rellax-speed="14"
			/>

			<article>
				<h3 className="features-subtitle">DESCRIPTION</h3>
				<p className="features-text">
				{props.description} 
				</p>
			</article>
		</div>
	</section>
)};

export default Features;