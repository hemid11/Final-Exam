import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Basket from './pages/Basket';
import Add from './pages/Add';
import WishlistPage from './pages/Wishlist';
import Detail from './pages/Detail'

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/add" element={<Add />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/detail" element={<Detail />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;