import { ActionTypes } from '../contants/actions-type'
import axios from 'axios'


const setProducts = (products) => ({
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  
})
export const fetchProducts = () =>  async (dispatch) => {
    const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
      console.log('Error', err)})
    dispatch(setProducts(response.data))
}

export const selectedProduct = (product) => {
  return ({
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  })
}

export const fetchProduct = (id) =>  async (dispatch) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err) => {
    console.log('Error', err)})
  dispatch(selectedProduct(response.data))
}

export const removeSelectedProduct = () => {
  return ({
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  })
}