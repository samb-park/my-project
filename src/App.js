import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import ProductDetail from "./components/Shop/ProductDetail";
import useFetchData from "./hook/useFetchData";



function App() {
    const { data, error, isLoading } = useFetchData(
        "https://web-ge8buw2ff-bird-and-be.vercel.app/api/interview"
    );

    const products = data;

    return (
        <Layout>
            {!isLoading && (
                <Routes>
                    <Route path="/" element={<Shop products={products} />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route
                        path="/ProductDetail/:id"
                        element={<ProductDetail products={products} />}
                    />
                </Routes>
            )}
        </Layout>
    );
}

export default App;
