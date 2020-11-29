//import {v4 as uuid} from 'uuid'
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const initState = {
    items :[],
    id:uuidv4(), //uuid(),
    item:'',
    editedItem: false
}
const rootReducer = (state = initState, action) => {
    if (action.type === "DELETE_TODO_ITEM") {
        const filteredItems = state.items.filter((item) => {
            return (item.id !== action.id);
          });
        return {
            ...state,
            items:filteredItems
        }
    } else if (action.type === "EDIT_TODO_ITEM") {
        const editedItem = state.items.find((item) => {
            return (item.id === action.id)
          });
          return {
            ...state,
            item:editedItem.title,
            id:editedItem.id,
            editedItem:true,
        }
    } else if (action.type === "ADD_TODO_ITEM") {
        const newItem = {
            id : state.id,
            title: action.title
          };
        const updatedItems = [...state.items, newItem];
        return {
            ...state,
            items:updatedItems,
            item:'',
            id:uuidv4(),
            editedItem:false
        }
    } else if (action.type === "UPDATE_TODO_ITEM") {
        let updatedItems = state.items.map((item) => {
            if(item.id === action.id) {
              item.title = action.title;
            }
            return item;
          });
        return ({
        items: updatedItems,
        item:'',
        id:uuidv4(),
        editedItem:false
        });
    } else if (action.type === 'CLEAR_TODO_ITEMS') {
        return({
            items:[],
            id:uuidv4(),
            item:'',
            editedItem: false
          });
    } else if (action.type === 'CHANGE_TODO_ITEM') {
        return ({
            ...state,
            item: action.title
        });
    }
    return state;
}
export default rootReducer