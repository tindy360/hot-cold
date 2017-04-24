import { createStore, applyMiddleware } from 'redux';
import game from './reducers/game';
import thunk from 'redux-thunk';



const store = createStore(game, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

export default store
