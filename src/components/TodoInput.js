import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addTodoItem} from '../actions/addTodoItem'
import {updateTodoItem} from '../actions/updateTodoItem'

class TodoInput extends Component {
    state = {title:''}
    handleChange = (e) => {
        this.setState({title: e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.editedItem === false ) {
            this.props.addTodo(this.state.title);
        } else {
            this.props.updateTodo(this.props.id, this.state.title);
        }
    }
    render() {
        const {item , editedItem} = this.props;
        let btnCaption = (editedItem === true) ? "edit item" : "add item";
        return (
            <div className="card card-body my-3">
                <form onSubmit = {this.handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fa fa-book"></i>                                
                            </div>
                        </div>
                        <input type="text" className="form-control text-capitalize" placeholder="add a todo item" value={item} onChange={this.handleChange}></input>
                    </div>
                    <button type="submit" 
                        className={ (editedItem === true) ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"}>{btnCaption}</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        item: state.item,
        id:state.id,
        editedItem:state.editedItem,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo : (newTitle) => dispatch(addTodoItem(newTitle)),
        updateTodo: (id, title) => dispatch(updateTodoItem(id, title))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoInput)