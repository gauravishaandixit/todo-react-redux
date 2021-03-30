import React, {useState} from 'react'
import './Input.css'

import { useDispatch } from 'react-redux'
import { SaveTodo } from '../../actions/Actions'
//import saveTodo from '../../slice/todoSlice'

const Input = () => {

    const[todo, setTodo] = useState('')
    const dispatch = useDispatch()
    
    const addTodo = () => {
        if(todo.trim() !== ''){
            const newTodo = {
                item: todo,
                done : false,
                date : Date.now()
            }
            setTodo("")
            dispatch(SaveTodo(newTodo))
        }
    }

    return (
        <div className = 'input'>
            <input type = 'text' value = {todo} onChange = {e => setTodo(e.target.value)}/>
            <button onClick = {addTodo}>Add!</button>
        </div>
    )
}

export default Input
