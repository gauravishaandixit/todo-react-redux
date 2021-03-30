export const SaveTodo = (newTodo) => {
    return {
        type : 'save',
        payload : newTodo
    }
}

export const CheckDone = (id) => {
    return {
        type : 'check',
        payload : id
    }
}