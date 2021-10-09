import React, { Component } from 'react';
import axios from 'axios';
import store from './store';
import { getInputChangeAction,btnClickADD,delTodoItem } from './store/actionCreators';
import TodoListUI from './TodoListUI';

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState();
        store.subscribe(this.handleStoreChange)
    }
    render() {
        let {haddleInputChange,handleStoreChange,handleButtonClick,deleteTodo} = this;
        return (
           <TodoListUI inputValue={this.state.inputValue} list ={this.state.list}
           haddleInputChange = {haddleInputChange} handleStoreChange={handleStoreChange}
           handleButtonClick={handleButtonClick} deleteTodo={deleteTodo}
           />
        )
    }
    componentDidMount(){
        axios.get('/list.json')
        .then(res=>{

        })
        .catch(err=>{

        })
    }
    haddleInputChange = (e) => {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleStoreChange = () => {
        this.setState(
            store.getState()
        )
    }
    handleButtonClick = () => {
        const action = btnClickADD()
        store.dispatch(action)
    }
    deleteTodo = (index) => {
        const action = delTodoItem(index)
        store.dispatch(action)
    }
}
export default TodoList;