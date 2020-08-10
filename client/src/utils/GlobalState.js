import React, { createContext, useReducer, useContext } from "react";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  UPDATE_PRODUCTS
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case ADD_TO_CART:
    return {
      ...state,
      cartProducts: [action.product, ...state.cartProducts],
    };

  case REMOVE_ITEM:
    return {
      ...state,
      cartProducts: state.cartProducts.filter((product) => {
        return product.productId !== action._id; 
      })
    };
    case UPDATE_PRODUCTS:
    return {
      ...state,
      products: [...action.products],
    };
  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    cartProducts: [],
    products: []
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
