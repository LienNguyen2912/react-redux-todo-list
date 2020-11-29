export const updateTodoItem = (id, title) => {
    return {
        type: "UPDATE_TODO_ITEM",
        id: id,
        title : title
    }
}