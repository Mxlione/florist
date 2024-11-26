import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, decrementItemQuantity } from '../redux/cartSlice';
import { plantList } from '../datas/PlantList';
import PlantItem from './PlantItem';
import '../components/styles/shop.css';

function ShoppingList() {
    const [filteredPlants, setFilteredPlants] = useState(plantList);
    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    );

    function filter(category) {
        setFilteredPlants(plantList.filter((item) => item.category === category));
    }

    function all() {
        setFilteredPlants(plantList);
    }

    return (
        <div className="shoplist">
            <button onClick={() => all()} className="cat">All</button>
            {categories.map((cat) => (
                <button onClick={() => filter(cat)} className="cat" key={cat}>
                    {cat}
                </button>
            ))}

            <ul className="lmj-plant-list">
                {filteredPlants.map((plant) => {
                    const cartItem = cart.find((item) => item.id === plant.id);
                    const amount = cartItem ? cartItem.amount : 0;

                    return (
                        <div key={plant.id}>
                            <PlantItem {...plant} />
                            <div className="quantity-controls">
                                <button
                                    className="add"
                                    onClick={() => dispatch(decrementItemQuantity(plant.id))}
                                    disabled={amount <= 0}
                                >
                                    -
                                </button>
                                <span className="quantity">{amount}</span>
                                <button
                                    className="add"
                                    onClick={() => dispatch(addItemToCart(plant))}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}

export default ShoppingList;
