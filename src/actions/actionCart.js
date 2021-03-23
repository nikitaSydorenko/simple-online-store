import { ADD_TO_CART, REMOVE_FROM_CART } from '../types/types';

export const addToCart = (addedItem) => ({
  type: ADD_TO_CART,
  addedItem
})

export const removeFromCart = (removedItemId) => ({
    type: REMOVE_FROM_CART,
    payload: removedItemId
})
