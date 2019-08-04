import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Main from './components/Main/Main.jsx';
import Header from './components/Header/Header.jsx';
import Dialogs from './components/Dialogs/Dialogs.js';
import Ind from './components/Ind/Ind.js'



const App = (props) => {
	
	return (
		<BrowserRouter>
			<div className="App">
			<Header mes="hola" les="mundo" ses="!"/>
			<Route exact  path='/' render = {() => <Ind state={props.state}/>} />
			
			<Route path='/main' render = {() => <Main state={props.state} dispatch={props.dispatch}/>} /> 
			<Route exact path='/dialogs' render = {() => <Dialogs state={props.state}/>} />       
			</div>
		</BrowserRouter>
		);
}


export default App;
