import {combineReducers} from "redux";
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";
import noteReducer from './noteReducer'

const rootReducer = combineReducers({
    notes:noteReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});


export default rootReducer;