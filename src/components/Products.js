import React from "react";
import "./product.css";

const Products = ({ state, dispatch }) => {
  const { products, cart } = state;
  console.log("cart", cart);
  return (
    <div className="products">
      {products.map((item) => (
        <div
            key={item.id}
            className="card"
        >
          <img src={item.thumbnail}
            alt={item.title}
            className="image"
        />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{item.title}</span>
            <b>₹{item.price}</b>
          </div>

          {cart.some((p) => p.id === item.id) ? (
            <button
              style={{
                padding: 5,
                border: 0,
                borderRadius: 5,
                backgroundColor: "red",
                color: "white"
              }}
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: item
                });
              }}
            >
              Remove From Cart
            </button>
          ) : (
            <button
              style={{
                padding: 5,
                border: 0,
                borderRadius: 5,
                backgroundColor: "green",
                color: "white"
              }}
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: {
                    id: item.id,
                    title: item.title,
                    thumbnail: item.thumbnail,
                    qty: 1,
                    price: item.price
                  }
                })
              }
            >
              Add To Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;







































// import React from 'react'
// import './product.css'


// const Products = ({ state, dispatch }) => {
    
//     const { products, cart } = state;
    

//     return (
//         <div className='products'>
//             {products.map((prod) => {
//                 return (
//                     <div
//                         key={prod.id}
//                         className="card"
//                     >
//                         <img src={prod.thumbnail}
//                             alt={prod.title}
//                             className="image"
//                         />
//                         <div style={{ display: "flex", justifyContent: "space-between" }}>
//                             <span>{prod.title}</span>
//                             <b>₹{prod.price}</b>
//                         </div>

//                         {cart.some((p)=>p.id === prod.id)?
//                         (<button
//                             style={{
//                                 backgroundColor: "#f55d5d",
//                                 color: "white",
//                                 padding: 5,
//                                 borderRadius: 7,
//                                 border: 0
//                             }}
//                             onClick={()=>{
                                
//                                 dispatch({
//                                     type:"REMOVE_FROM_CART",
//                                     payload:prod
//                                 })
//                             }}
//                         >
//                             Remove From Cart
//                         </button>) :
//                             (
//                         <button style={{
//                             backgroundColor: "#11ba44",
//                             color: "white",
//                             padding: 5,
//                             borderRadius: 7,
//                             border: 0
//                         }}
//                         onClick = {()=>{
//                             console.log("state",state)
//                             dispatch({
//                                 id :prod.id,
//                                 title:prod.title,
//                                 thumbnail:prod.thumbnail,
//                                 price:prod.price,
//                                 qty:1,                               
//                             }) 
//                         }}
//                         >
//                             Add To Cart
//                         </button>

//                         )   
//                     }
                        

//                     </div>
//                 );
//             })}
//         </div>
//     )
// }
// export  default Products
