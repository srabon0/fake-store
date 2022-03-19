import React from 'react';
import './Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Menu = (props) => {
    return (
        <div>
            <nav className='d-flex justify-content-between align-items-center mx-5 mb-5' >
                <div>  <h2 className='text-info'>fAKE sTORE </h2></div>
                <div className='d-flex justify-content-between align-items-center'>
                
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Cart <i class="fa-solid fa-cart-shopping"></i> <sup> {props.count}</sup></a></li>
                    <li><a href="">Contact</a></li>
                
                </div>
            </nav>
        </div>
    );
};

export default Menu;