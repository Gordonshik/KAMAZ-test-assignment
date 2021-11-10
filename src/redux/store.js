import {combineReducers, createStore, applyMiddleware} from 'redux'
import users from '../redux/reducers'
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    users
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store