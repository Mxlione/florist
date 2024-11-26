import '../components/styles/Home.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();  // Utiliser useNavigate à la place de useHistory

    const handleClick = () => {
        // Remplacez history.push() par navigate()
        navigate('/main');  // Exemple de redirection vers la page '/main'
    };

    return (
        <div className="home-page">
            <div>
                <h1>Welcome to Floritta</h1>
                <p>This is where you can explore our products and make purchases easily. Click the button below to start shopping!</p>
                <button onClick={handleClick}>Get Started</button>
            </div>
        </div>
    );
}

export default HomePage;

