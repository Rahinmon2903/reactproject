import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from '../Components/ProductCard';

const Home = () => {
    const [data,setData]=useState([]);

    useEffect(()=>{
        fetchdata();

    },[])

    const fetchdata=async()=>{
        try {
            const response=await axios.get("https://fakestoreapi.com/products");
            setData(response.data)
            
        } catch (error) {

            console.log(error);
            
            
        }

    }
    return (
        <>
        {data.map((ele)=>{
            return(
                <div key={ele.id}>
                    <ProductCard ele={ele}/>


                </div>
            )
        })}

            
        </>
    );
};

export default Home;