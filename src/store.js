import { combineReducers, createStore} from 'redux'
import noteReducer from './reducers/noteReducer'

export const allreducer= combineReducers({notes:noteReducer})

export default createStore(allreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())