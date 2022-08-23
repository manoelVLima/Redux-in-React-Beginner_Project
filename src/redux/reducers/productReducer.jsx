import { ActionTypes } from "../contants/actions-type";
const INITIAL_STATE = {
  products: [],
}
export const productReducer = (state=INITIAL_STATE, {type, payload}) => {
  switch(type) {
    case ActionTypes.SET_PRODUCTS: return {
      ...state,
      products: payload
    }
    default: return state
  }
};

export const selectedReducer  = (state={}, {type, payload}) => {
  switch(type) {
    case ActionTypes.SELECTED_PRODUCT: return {
      ...state, ...payload
    }
    case ActionTypes.REMOVE_SELECTED_PRODUCT: return {}
    default: return state
  }
}