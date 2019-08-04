import React from 'react';
import c from './Main.module.css';
import {action , actionChange} from '../../redux/state.js'
const Post = (props) => {
    return <div className={c.post} >{props.id}{props.mesage}</div>
}



const Main = (props) => {
  let post = props.state.mesage.post.map(d => <Post mesage={d.mesage} id={d.id}/>);
  let newPostEl = React.createRef();
let addPost = () => {


  props.dispatch(action());

}
let onChangeText = () => {
  let text = newPostEl.current.value;
  props.dispatch(actionChange(text));

}
  return (
    <div>
      <h2>My posts</h2>
      <textarea onChange={onChangeText} ref={newPostEl} value={props.state.mesage.newText}/>
      <button onClick={addPost}>Add button</button>
      <div>
        {post}
      </div>
    </div>
  );
}

export default Main;