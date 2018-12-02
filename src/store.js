import {createStore, combineReducers, compose} from 'redux';
import {testReducer} from "./reducers/testReducer";
import {homeReducer} from "./reducers/homeReducer";


const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ || (() => (noop) => noop );
const enhancers = [devtools()];

const reducers = combineReducers({test : testReducer, home: homeReducer});
const store = createStore(reducers, {}, compose(...enhancers));





export default store;
