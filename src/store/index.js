import { createStore, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducers from './reducers';

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleWare)),
)

export default store;