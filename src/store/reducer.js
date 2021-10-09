import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO } from './actionTypes'
const defaultState = {
    inputValue: "",
    list: []
}
export default (state = defaultState, action={}) => {
    switch(action.type){
        case CHANGE_INPUT_VALUE:
            const newState = JSON.parse(JSON.stringify(state))
            newState.inputValue = action.value;
            return newState;
        case ADD_TODO_ITEM:
            const addState = JSON.parse(JSON.stringify(state))
            addState.list.push(addState.inputValue)
            addState.inputValue=""
            return addState;
        case DELETE_TODO:
            const delState = JSON.parse(JSON.stringify(state))
            delState.list.splice(action.index,1)
            return delState;
        default:
            return state;
    }
} 