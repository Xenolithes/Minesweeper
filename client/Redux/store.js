import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import Reducer from './Reducer/index';

const initialState = {}
const middleware = [thunk]
const Store = createStore(
    Reducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default Store;