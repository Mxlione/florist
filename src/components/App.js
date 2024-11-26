import '../components/styles/App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Utiliser Routes au lieu de Switch
import HomePage from './HomePage';
import MainPage from './MainPage';

function App() {
  document.title = "Florist"; // Correction du nom de la page


  return (
    <Router>
      <Routes> {/* Remplacer Switch par Routes */}
        {/* Définir les routes avec l'attribut element */}
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
