import { createStore, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducers from './reducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['newsReducer'],
}

const persistedReducer = persistReducer(persistConfig, reducers)


export default () => {
    let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunkMiddleWare)))
    let persistor = persistStore(store)
    return {
        store,
        persistor
    }
};