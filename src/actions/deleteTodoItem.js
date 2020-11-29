export const deleteTodoItem = (id) => {
    return {
        type: "DELETE_TODO_ITEM",
        id: id
    }
}