import React, { useContext } from 'react';
import { CartContext1 } from '../Context/CartContext';

const Cart = () => {
    const{cart} =useContext(CartContext1);
    return (

      <div>
        {cart.map((item)=>{
            return(
                <div key={item.id}>
                    
                    </div> 
            )
        })}
            
        </div>
    );
};

export default Cart;