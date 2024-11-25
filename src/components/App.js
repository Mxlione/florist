import Banner from './Banner'
import Footer from './Footer'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import '../components/styles/App.css'
import { useState } from 'react'

function App() {
  document.title = "Forist";
  const [cart, updateCart] = useState([])
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

export default App