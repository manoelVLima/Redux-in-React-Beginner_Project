import './App.css';
import Header from './components/Header';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
