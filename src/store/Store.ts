import { createStoreHook } from 'react-redux';
import { tokenReducer } from './tokens/TokensReducer';

const store = createStoreHook(tokenReducer);

export default store;