import React, { useContext } from 'react';
import { CartContext1 } from '../Context/CartContext';
import CartItem from '../Components/CartItem';

const Cart = () => {
    const{cart} =useContext(CartContext1);
    return (

      <div>
        {cart.map((item)=>{
            return(
                <div key={item.id}>
                    <CartItem item={item}/>
                    
                    </div> 
            )
        })}
            
        </div>
    );
};

export default Cart;