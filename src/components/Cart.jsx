import React from "react";
import './cart.css'

const Cart = ({ state, dispatch }) => {
    const { cart } = state;

    const [total, settotal] = React.useState(0)
    // console.log("nwe",cart)
    return (
        <div className="cart"
        >
            <b style={{ fontSize: 30, alignSelf: "center" }}>Cart</b>
            <b style={{ alignSelf: "center" }}>{total}
            </b>
            {cart.length > 0 ? (
                cart.map((prod)=>(
                    <div
                    key={prod.title}
                    style={{
                        display: "flex",
                        padding: 10,
                        border: "0px solid",
                        margin: 4,
                        justifyContent: "space-between",
                    }}
                >
                    <img src={prod.thumbnail}
                        alt={prod.title}
                        style={{width:80,objectFit:"cover"}}
                    />
                    <div style={{ display: "flex",flexDirection:"column", justifyContent: "space-evenly" }}>
                        <span>{prod.title}</span>
                        <b>₹{prod.price}</b>
                    </div>
                    <div style={{display:'flex', alignItems:'center',gap:10}}>
                    <button>-</button>
                    <span>{prod.qty}</span>
                    <button>+</button>

                    </div>
                    

                </div>
                ))
                
            ) : (
                <span>
                    Cart is Empty

                </span>
            )}
        </div>
    );
};

export default Cart;
