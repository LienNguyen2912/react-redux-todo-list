import React, { Component } from 'react'
import TodoItem from './TodoItem'
import {connect} from 'react-redux'
import {clearTodoItem} from '../actions/clearTodoItem'
class TodoList extends Component {
    handleClear = () => {
        this.props.clearTodo();
    }
    render() {
        let {items} = this.props;
        let itemList = items.map((item) => {
            return (<TodoItem 
                        item = {item} 
                        key={item.id}
                    />);
        });
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">
                    todo list
                </h3>
                {itemList}
                <button type="button" className="btn btn-danger btn-block tex-capitalize mt-5" onClick={this.handleClear} >
                    Clear list
                </button>
            </ul>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        clearTodo: () => dispatch(clearTodoItem())
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)