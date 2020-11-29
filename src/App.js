import React, {Component} from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component {
  // state = {
  //   items :[],
  //   id:uuid(),
  //   item:'',
  //   editedItem: false
  // }
  // handleChange = (e) => {
  //   this.setState({
  //     item: e.target.value
  //   })
  // }
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (this.state.editedItem === false) {
  //     const newItem = {
  //       id : this.state.id,
  //       title: this.state.item
  //     };
  //     const updatedItems = [...this.state.items, newItem];
  //     this.setState({
  //       items: updatedItems,
  //       item:'',
  //       id:uuid(),
  //       editedItem:false
  //     });
      
  //   } else {
  //     let updatedItems = this.state.items.map((item) => {
  //       if(item.id === this.state.id) {
  //         item.title = this.state.item;
  //       }
  //       return item;
  //     });
  //     this.setState({
  //       items: updatedItems,
  //       item:'',
  //       id:uuid(),
  //       editedItem:false
  //     });
      
  //   }
  //   //console.log(updatedItems);
  // }
  // handleClear = (e) => {
  //   this.setState({
  //     items:[],
  //     id:uuid(),
  //     item:'',
  //     editedItem: false
  //   });
  // }
  // handleDelete = (id) => {
  //   const filteredItems = this.state.items.filter((item) => {
  //     return (item.id !== id);
  //   });
  //   this.setState({
  //     items:filteredItems
  //   });
  // }
  // handleEdit = (id) => {
  //   const editedItem = this.state.items.find((item) => {
  //     return (item.id === id)
  //   });
  //   this.setState({
  //     item:editedItem.title,
  //     id:editedItem.id,
  //     editedItem:true,
  //   });
  // }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className ="text-capitalize text-center">
              Todo input
            </h3>
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
    
}

export default App
