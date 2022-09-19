
import './App.css';
import axios from "axios";
import React from "react";
import {cartReducer} from "./reducer/cartReducer"
import Products from "./components/Products";
import Cart from "./components/Cart";

export default function App() {
  const [state, dispatch] = React.useReducer(cartReducer, {
    products: [],
    cart: []
  });

  // console.log("this", state);
  const fetchProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products
    });
  };
  React.useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}


// import './App.css';
// import Cart  from './components/Cart';
// import Products from './components/Products';
// import React, {useState,useEffect} from 'react'
// import {cartReducer} from "./reducer/cartReducer"
// import axios from 'axios';

// export default function App() {
//   const [state, dispatch] = React.useReducer(cartReducer, {
//     products: [],
//     cart: [],
//   });

//   const fetchProducts = async()=>{
//     const {data} = await axios.get("https://dummyjson.com/products")
//     // console.log('data',data)
//     dispatch({
//       type: "ADD_PRODUCTS",
//       payload: data.products,
//     });
//   };
//    React.useEffect(()=>{
//     fetchProducts();
//     // console.log("m",state)
//   },[]);


//   return (
//     <div className="App">
//       <Products state={state} dispatch={dispatch}/>
//       <Cart state={state} dispatch={dispatch}/>
//     </div>
//   );
// };
