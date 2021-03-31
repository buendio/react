export default class FetchData {
  getResourse = async (url) => {
    const res = await fetch(url);
    if(!res.ok) {
      throw new Error('ПРоизошда ошибка');
    }  
    return await res.json();   
  };
  // https://api.spacexdata.com/v4/rockets
  // https://api.spacexdata.com/v4/launches/past
};