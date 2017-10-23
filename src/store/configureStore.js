// ./react-redux-client/src/store/configureStore.js
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

export default function configureStore(initialState) {
    const middlewares = [
        thunk
    ];
    
    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(...middlewares),
        window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
    ));
    
    return store;
}