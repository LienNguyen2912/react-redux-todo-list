import React, { Component } from 'react'
import {connect} from 'react-redux'
import {editTodoItem} from '../actions/editTodoItem'
import {deleteTodoItem} from '../actions/deleteTodoItem'

class TodoItem extends Component {
    handleEdit = () => {
        const {id} = this.props;
        this.props.editTodo(id);
    }
    handleDelete = () => {
        const {id} = this.props;
        this.props.deleteTodo(id);
    }
    render() {
        const {title} = this.props;
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success" onClick = {this.handleEdit}>
                        <i className="fa fa-pencil"></i>
                    </span>
                    <span className="mx-2 text-danger" onClick = {this.handleDelete}>
                        <i className="fa fa-trash"></i>
                    </span> 
                </div>
            </li>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        id: ownProps.item.id,
        title : ownProps.item.title
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        editTodo : (id) => dispatch(editTodoItem(id)),
        deleteTodo : (id) => dispatch(deleteTodoItem(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)