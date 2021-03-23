import { ADD_TO_CART, REMOVE_FROM_CART } from '../types/types';

export const addToCart = ({ addedItem, newTotal }) => ({
  type: ADD_TO_CART,
  payload: {
    addedItem,
    newTotal
  }
})

export const removeFromCart = ({ removedItemId, newTotal }) => ({
    type: REMOVE_FROM_CART,
    payload: {
      removedItemId,
      newTotal
    }
})
