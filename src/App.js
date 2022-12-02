import React from "react";
import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/Header";
import Home from "./pages/home/Home";
import Catalog from "./pages/catalog/Catalog";
import SortedCatalogByName from "./pages/catalog/SortedCatalogByName";
import SortedCatalogByPrice from "./pages/catalog/SortedCatalogByPrice";
import SinglePage from "./pages/catalog/SinglePage";
import Cart from "./pages/cart/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/sortedCatalogByName" element={<SortedCatalogByName />} />
                <Route path="/sortedCatalogByPrice" element={<SortedCatalogByPrice />} />
                <Route path="/drug/:id" element={<SinglePage />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App;
