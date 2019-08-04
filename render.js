import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {onChangeText} from './redux/state.js'
import {addPost} from './redux/state.js'
import state from './redux/state.js';

//addPost('hola');
export let render = (state) => {
	ReactDOM.render(<App state={state} addPost={addPost} onChangeText={onChangeText}/>, document.getElementById('root'));
}
