export const changeTodoItem = (newTitle) => {
    return {
        type: "CHANGE_TODO_ITEM",
        title: newTitle
    }
}