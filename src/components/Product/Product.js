import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reactmodal from '../Reactmodal/Reactmodal';

const Product = (props)=>{
    const {title,price,image,description} = props.product;
    const {setCartCount} = props;
    
    return(
        <div className="col shadow">
            <div className="card h-100">
                <img src={image} className="card-img-top w-50 m-auto p-3" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title.slice(0,20)}</h5>

            <h4 className="card-text"> $ {price}</h4>
            <p className="card-text">{description.slice(0,250)}</p>
            <div className='d-flex justify-content-between' >
                <a href="#" onClick={setCartCount} className="btn btn-primary">Add to cart</a>
                
                <a href="#" className="btn btn-danger">Delete</a>

                <Reactmodal product={props.product} ></Reactmodal>
            </div>
            </div>
        </div>
  </div>
    )
}


export default Product;