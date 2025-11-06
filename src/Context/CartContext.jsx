import React, { createContext, useState } from "react";


export const CartContext1 = createContext();

































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
