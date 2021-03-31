import { useEffect, useState } from 'react'
import FetchData from '../../service/fetchData.js';

const fetchData = new FetchData();
const Launches = () => {
  
  // Хуки!!!!


  useEffect( () => {
		fetchData.getResourse('https://api.spacexdata.com/v4/launches/past')
		.then(data => setData(data))
  }, [])
  
  const [data, setData] = useState([]);
  
  const getLaunch = id => data.find(i => i.id === id)

  return {data, getLaunch};
}
export default Launches;