import { combineReducers } from  'redux';
import { productReducer, selectedReducer } from './productReducer';


export const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedReducer,
})