const TodoReducer = (state = {todoList:[] }, action) => {
    
    if(action.type === 'save'){
        state.todoList =  [...state.todoList, action.payload]
        return state
    }
    else {
        if(action.type === 'check'){
            const todoList = [...state.todoList]
            todoList.map((item) => {
                if(item.date === action.payload){
                    if(item.done === false)
                        item.done = true
                    else
                        item.done = false

                    console.log(item)
                }
                else{
                    
                }
            })
            state.todoList = [...todoList]
            return state
        }
        else
            return state
    }
}

export default TodoReducer;