import React, { useContext } from 'react';

import CartItem from '../Components/CartItem';
import { useCart } from '../Context/CartContext';


const Cart = () => {
    const{cart}=useCart();
    
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