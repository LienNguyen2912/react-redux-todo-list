import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addTodoItem} from '../actions/addTodoItem'
import {updateTodoItem} from '../actions/updateTodoItem'
import {changeTodoItem} from '../actions/changeTodoItem'

class TodoInput extends Component {
    
    handleChange = (e) => {
       this.props.changeTodoItem(e.target.value);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.editedItem === false ) {
           this.props.addTodo(this.props.item);
        } else {
           this.props.updateTodo(this.props.id, this.props.item);
        }
        this.beingUpdate = false;
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
                        <input type="text" className="form-control text-capitalize" placeholder="add a todo item" value ={item} onChange={this.handleChange}></input>
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
        updateTodo: (id, title) => dispatch(updateTodoItem(id, title)),
        changeTodoItem : (title) => dispatch(changeTodoItem(title))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoInput)