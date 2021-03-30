import React from 'react';
import './TodoList.css'
import { Checkbox } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { CheckDone } from '../../actions/Actions';

const ShowTodo = ({item, done, id}) => {

    const dispatch = useDispatch()
    const handleChange = () => {
        dispatch(CheckDone(id))
    }

    return <div className = 'todoItem'>
        <Checkbox
            checked={done}
            color = 'primary'
            onChange={handleChange}
            inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <p className = {done ? 'todoItem--done' : ''}> {item} </p>
    </div>
}

export default ShowTodo;