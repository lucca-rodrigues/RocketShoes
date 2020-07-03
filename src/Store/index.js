import { createStore } from 'redux';
import rootReducer from './Modules/rootReducer';

const store = createStore(rootReducer);

export default store;
