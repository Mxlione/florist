import Banner from './Banner'
import Footer from './Footer'
import Cart from './Cart'
import { useState } from 'react';
import ShoppingList from './ShoppingList'
import React from 'react';

function MainPage() {
    const [cart, updateCart] = useState([]);
    return (
        <div>
            <Banner />
            <div className='content'>
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
            <Footer />
        </div>
    )
}

export default MainPage;
