import React from 'react';
import './style.css'
import { BrowserRouter, Route} from 'react-router-dom'

import Header from './components/Header/Header.js'
import Main from './components/Main/Main.js'
import Footer from './components/Footer/Footer.js'
import Features from './components/Features/Features.js'
import Calendar from './components/Calendar/Calendar.js'
import Details from './components/Details/Details.js'
import Test from './components/Test/Test.js'
import FetchData from './service/fetchData.js'

class App extends React.Component {
  FetchData = new FetchData();
  state = {
    rocket: 'Falcon 1',
    rockets: [],
    rocketFeatures: '',
  };

  componentDidMount() {
    this.FetchData.getResourse('https://api.spacexdata.com/v4/rockets').then(data => data.map(item => console.log(item.name)))
    this.updateRocket();     
  }
 
 updateRocket() {
 this.FetchData.getResourse('https://api.spacexdata.com/v4/rockets')
 .then(data => {
   this.setState({rockets: data.map(inem => inem.name)})
   return data;
 })
 .then(data => data.find(item => item.name === this.state.rocket))
 .then(item => this.setState({rocketFeatures: item } ));
}

changeRocket = (rocket) => {
  this.setState({rocket}, this.updateRocket)
}
 
rf(main) {
  console.log(main);

}

 render() {
  let logos = React.createRef();
 
  return (
    
    <>
    <BrowserRouter>
      <h2  onClick={this.rf}>click</h2>
      <Header rockets={this.state.rockets} changeRocket={this.changeRocket}  logos={logos}/>
      <Route exact path='/'>       
        <Main rocket={this.state.rocket} ref={logos}/>
        {this.state.rocketFeatures && <Features {...this.state.rocketFeatures} rf={this.rf}/>}      
      </Route>
      <Route exact path='/calendar'>
        <Calendar/>
      </Route>
      <Route exact path='/test'>
        <Test/>
      </Route>
      <Route path='/details/:id' component={Details} />

      <Footer /> 
    </BrowserRouter>
    </>  
  );
 }
 
  
}

export default App;
