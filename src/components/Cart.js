import '../components/styles/Cart.css'
import { useState, useEffect } from 'react'
function Cart({ cart, updateCart }) {
    let price = 0
    const [isOpen, setIsOpen] = useState(false)

    function vider() {
        updateCart([])
    }



    
    price = cart.reduce((total, item) => total + (item.prix * item.amount), 0);
  

    return isOpen ? (
        <div className='lmj-cart'>
            <h2>Your Cart</h2>
            <div className="btn">
                <button className='close' onClick={() => setIsOpen(false)}>Close cart</button>
                {cart.length > 0 && (
                    <button className='close' onClick={() => vider()}>
                        Empty the cart
                    </button>
                )}
            </div>
            <div>
                {
                    cart.map((item) => (
                        <h3 key={item.id}> {item.name} : {item.prix} € x { item.amount}</h3>
                    ))
                }

                
            </div>
            <h3>Total : {price} €</h3>
        </div>
    ) : (
            <button className='open' onClick={() => setIsOpen(true)}> Open the cart</button>
    )
}

export default Cart