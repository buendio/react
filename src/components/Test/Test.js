import React, {useState, useEffect, useContext} from 'react';
import './test.css'
const MyContext = React.createContext()

const Test = () => {
    
    const [todos, setTodos] = useState([
        { id:1, title:'un'},
        { id:2, title:'dos'},
    ])

    const [todoTitle, settodoTitle] = useState('');

    useEffect(() => {
        console.log(todos.length);
    }, [todos])

    

    const addTodo = e => {
        setTodos([
            ...todos,
            {
                id:Date.now(),
                title: todoTitle
            }
        ])
        settodoTitle('')
    }

    return (
        <div className="wrp">
            <h1>Test!!!</h1>
            <input type="text" value={todoTitle} onChange={e => settodoTitle(e.target.value)}/>
            <button onClick={addTodo}>ADD</button>
            <MyContext.Provider value={todos}>
                <TodoList todos={todos}/>
            </MyContext.Provider>
        </div>
    )

}

const TodoList = (props) => {

    return (
        <ul>
            {props.todos.map(it => <TodoItem key={it.id} {...it}/> )}
            
        </ul>
    )
}



const TodoItem = (props) => {
    
    const cntx = useContext(MyContext)    
 console.log(cntx);
    return (
       <li>{props.title}</li>
    )
}
export default Test;