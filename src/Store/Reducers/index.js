import {combineReducers} from 'redux'
import JokeReducer from '../Reducers/JokeReducer'

export default combineReducers({
    joke:JokeReducer
})