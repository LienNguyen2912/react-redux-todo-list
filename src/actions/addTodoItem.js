export const addTodoItem = (newTitle) => {
    return {
        type:"ADD_TODO_ITEM",
        title: newTitle
    }
}