import '../components/styles/Cart.css';
import { FaTrash } from 'react-icons/fa';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, decrementItemQuantity, incrementItemQuantity, clearCart, removeItemFromCart } from '../redux/cartSlice';

function Cart() {
    const [isOpen, setIsOpen] = useState(false);
    const cart = useSelector((state) => state.cart.items);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const dispatch = useDispatch();

    return isOpen ? (
        <div className="lmj-cart">
            <h2>Your Cart</h2>
            <div className="btn">
                <button className="close" onClick={() => setIsOpen(false)}>Close cart</button>
                {cart.length > 0 && (
                    <>
                        <button className="close" onClick={() => dispatch(clearCart())}>Empty the cart</button>
                        <button className="payer">Coming Soon</button>
                    </>
                )}
            </div>
            <div>
                {cart.map((item) => (
                    <div className="flex" key={item.id}>
                        <img className="img" src={item.cover} alt={`${item.name} cover`} />
                        <div className="name">
                            {item.name} : {item.prix} € x {item.amount}
                        </div>
                        <div className="controls">
                            <button className='set' onClick={() => dispatch(decrementItemQuantity(item.id))} disabled={item.amount === 1}>-</button>
                            <button className='set' onClick={() => dispatch(incrementItemQuantity(item.id))}>+</button>
                            {/* Bouton Delete pour retirer l'article */}
                            <button className='delete' onClick={() => dispatch(removeItemFromCart(item.id))}>
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <h3>Total: {totalPrice} €</h3>
        </div>
    ) : (
        <button className="open" onClick={() => setIsOpen(true)}>
            <FaShoppingCart /> {cart.length > 0 ? cart.length : ''}
        </button>
    );
}

export default Cart;
