import { ADD_TO_CART, REMOVE_FROM_CART } from '../types/types';

export const addToCart = ({ addedItem, newTotal }) => ({
  type: ADD_TO_CART,
  payload: {
    addedItem,
    newTotal
  }
})

export const removeFromCart = ({ removedItem, newTotal }) => ({
    type: REMOVE_FROM_CART,
    payload: {
      removedItem,
      newTotal
    }
})
