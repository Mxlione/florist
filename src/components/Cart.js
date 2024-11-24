import '../components/styles/Cart.css'
import { useState, useEffect } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
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
                    <>
                        <button className='close' onClick={() => vider()}>
                             Empty the cart
                        </button><button className=' payer'>
                            Coming Soon
                        </button>
                    </>

                )}
            </div>
            <div>
                {
                    cart.map((item) => (
                        <div className='flex'>
                            <div>
                                <img className='img' src={item.cover} alt={`${item.name} cover`} />
                            </div>
                            <div className='name'>
                                {item.name} : {item.prix} € x {item.amount}
                            </div>
                        </div>
                    ))
                }

                
            </div>
            <h3>Total : {price} €</h3>
        </div>
    ) : (
            <button className='open' onClick={() => setIsOpen(true)}> <FaShoppingCart />  {cart.length > 0 ? cart.length : ''}</button>
    )
}

export default Cart