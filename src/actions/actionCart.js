import { ADD_TO_CART } from '../types/types';

export const addToCart = (addedItem) => ({
  type: ADD_TO_CART,
  addedItem
})

