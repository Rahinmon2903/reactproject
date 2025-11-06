import React, { createContext, useContext, useReducer, useState } from "react";


export const CartContext1 = createContext();

const initialState=[];

const CartReducer=(state,action)=>{

    switch (action.type) {
        case "ADD":
            const exist=state.find((item)=>item.id == action.payload.id);
            if(exist){
                return state;
            }else{
                return [...state,{...action.payload,quantity:1}];
            }
            
            break;
             case "REMOVE":
             return state.filter((item)=>item.id !== action.payload.id);
            
            
            break;
             case "INCREASE":
                return state.map((item)=> item.id == action.payload ? {...item, quantity:item.quantity+1} : item) 

           
            break;
            case "DECREASE":
                return state.map((item)=> item.id == action.payload && item.quantity > 1 ? {...item,quantity:item.quantity-1} : item)

             break;
    
        default:
            return state;
    }

}

export const CartProvider =({children})=>{
    const[cart,dispatch]=useReducer(CartReducer,initialState);


    return(

    <CartContext1.Provider value={{cart,dispatch}}>

        {children}
    </CartContext1.Provider>
);
}

export const useCart = () => useContext(CartContext1);








































// const CartContext = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const AddtoCart = (product) => {
//     const result = cart.find((item) => item.id === product.id);

//     if (result) {
//       alert("Already added");
//     } else {
//       setCart((prev) => [
//   ...prev,
//   { ...product, quantity: 1 }
// ]);

//     }
//   };

//   return (
//     <CartContext1.Provider value={{ cart, setCart, AddtoCart }}>
//       {children}
//     </CartContext1.Provider>
//   );
// };

// export default CartContext;
