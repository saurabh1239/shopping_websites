export const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_PRODUCTS":
        return { ...state, products: action.payload };
      case "ADD_TO_CART":
        return { ...state, cart: [{ ...action.payload }, ...state.cart] };
      case "REMOVE_FROM_CART":
        console.log("reducer", action.payload.cart);
        return {
          ...state,
          cart: state.cart.filter((c) => c.id !== action.payload.id)
        };
  
      default:
        break;
    }
  };