import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from '../Product/Product';

const Products = (props) => {
    const {setCartCount} = props;
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    },[])
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4" >
            {products.map(product=> <Product product={product} key={product.id} setCartCount={setCartCount} ></Product> )}
            
        </div>
    );
};

export default Products;






  