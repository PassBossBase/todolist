import { createStore } from 'redux'; //创建全局store的方法
import reducer from './reducer'
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;