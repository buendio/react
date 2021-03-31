import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import FetchData from '../../service/fetchData.js'
import Launches from '../Hoocks/Launch.js';
import './calendar.css'
const fetchData = new FetchData();
const Calendar = () => {
	// Хуки!!!!

	const {data} = Launches();
	return (
  	<section className="calendar">
	  	<div className="container">
			  <ul className="calendar-list">
					{
						data.map(i => (
								<li className="calendar-item" key={i.id}>
									<article className="launches">
									<div className="launches-image">
										<img src={i.links.patch.small} alt=""/>
										<a className="launches-youtube" href="https://www.youtube.com/watch?v=dLQ2tZEH6G0" />
									</div>
									<div className="launches-content">
										<h2 className="launches-title">{i.name}</h2>
										<Link to={`/details/${i.id}`} className="button launches-details">Подробнее</Link>
									</div>
								</article>
								</li>
						))
					}
				  



			</ul>
		</div>
	</section>
)}

export default Calendar;