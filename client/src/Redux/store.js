
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; // Para hacer peticiones al servidor, traductor.
import reducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Para usar Redux Devtools en el navegador.

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;