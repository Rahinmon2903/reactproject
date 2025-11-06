import React from 'react';

const CartItem = ({item}) => {
    return (
        <>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="p-8 rounded-t-lg" src={item.image} alt={item.title} />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
         
          <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1">
            {item.title}
          </h4>

         
          <h5 className="text-sm font-medium tracking-tight text-gray-600 dark:text-gray-400">
            {item.description}
          </h5>
        </a>

        <div className="flex items-center mt-2.5 mb-5">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
            ⭐ {item.rating.rate}
          </span>
        </div>

       
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${item.price}
          </span>
          <button
            // onClick={() => AddtoCart(ele)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                       focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                       dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Remove from cart
          </button>
        </div>
      </div>
    </div>
            
        </>
    );
};

export default CartItem;