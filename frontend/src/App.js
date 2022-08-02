import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import HomeScreen from './Pages/HomeScreen';
import ProductScreen from './Pages/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">E-Buy</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
