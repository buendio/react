import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import Youtube from 'react-youtube'
import Launches from '../Hoocks/Launch'
import './details.css'

const Details = (props) => {
	
	const { getLaunch } = Launches();
	const [launch, setLaunch] = useState(null);
	useEffect( () => {
		setLaunch(getLaunch(props.match.params.id))
	})
	console.log(launch)
	const history = useHistory();
  if(!launch) return <div className="load">LOADING...</div>
	return (
  <main className="details">
		<div className="container">
		<h1>{launch.name}</h1>
			<div className="details-row">
				
				<div className="details-image">
					<img src={launch.links.patch.small} alt=""/>
				</div>
				<div className="details-content">
					<p className="details-description">{launch.details}</p>
				</div>
			</div>
			<div>
				<Youtube className='details-youtube' videoId={launch.links.youtube_id} />
			</div>
		</div>
		<Link onClick={history.goBack} className="button button-back">go back</Link>
	</main>
   
)}

export default Details;