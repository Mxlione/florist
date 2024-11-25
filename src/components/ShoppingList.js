import { useState } from 'react';  // Importer useState pour gérer l'état
import { plantList } from '../datas/PlantList';
import PlantItem from './PlantItem';
import '../components/styles/shop.css';

function ShoppingList({ cart, updateCart }) {
    
    const [filteredPlants, setFilteredPlants] = useState(plantList); // État pour les plantes filtrées

    // Créer une liste des catégories uniques
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    );

    // Fonction de filtrage
    function filter(category) {
        const filtered = plantList.filter((item) => item.category === category);
        setFilteredPlants(filtered);  // Mettre à jour l'état avec les plantes filtrées
    }

    function all() {
        setFilteredPlants(plantList);  
    }
    

    // Fonction d'ajout ou mise à jour dans le panier
    function update(id, cover, name, water, light, prix, amount = 1) {
        // Vérifier si l'élément existe déjà dans le panier
        const found = cart.find((item) => item.id === id);

        if (found) {
            // Mettre à jour les informations de l'élément existant
            const updatedCart = cart.map((item) =>
                item.id === id ? { ...item, amount: item.amount + amount } : item
            );
            alert(
                `${amount} ${name} ajouté(e) 🌱✨\nQuantité totale maintenant : ${found.amount + amount
                }. Très bon choix !`
            );
            updateCart(updatedCart); // Mettre à jour l'état avec un nouveau tableau
        } else {
            // Ajouter un nouvel élément au panier
            updateCart([...cart, { id, cover, name, water, light, prix, amount }]);
            alert(`${amount} ${name} ajouté(e) à votre panier. Très bon choix 🌱✨`);
        }
    }

    return (
        <div className="shoplist">
            <button onClick={() => all()} className='cat'>
                All
            </button>
            {categories.map((cat) => (
                <button onClick={() => filter(cat)} className='cat' key={cat}>
                    {cat}
                </button>
            ))}
            

            <div>
                <ul className='lmj-plant-list'>
                    {/* Affichage des plantes filtrées */}
                    {filteredPlants.map(({ id, cover, name, water, light, prix }) => (
                        <div key={id}>
                            <PlantItem
                                id={id}
                                cover={cover}
                                name={name}
                                water={water}
                                light={light}
                                prix={prix}
                            />
                            <button
                                className='add'
                                onClick={() => update(id, cover, name, water, light, prix)}
                            >
                                Add ({prix} € / unit)
                            </button>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ShoppingList;
