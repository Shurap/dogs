import {createStore, combineReducers, compose} from 'redux';
import {testReducer} from "./reducers/testReducer";


const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ || (() => (noop) => noop );
const enhancers = [devtools()];
const reducers = combineReducers({test : testReducer});
const store = createStore(reducers, {}, compose(...enhancers));





export default store;
