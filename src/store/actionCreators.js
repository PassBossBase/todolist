import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO } from './actionTypes'
export const getInputChangeAction = (value) =>({
    type:CHANGE_INPUT_VALUE,
    value
})
export const btnClickADD = () =>({
    type:ADD_TODO_ITEM,
})
export const delTodoItem = (index) =>({
    type:DELETE_TODO,
    index
})