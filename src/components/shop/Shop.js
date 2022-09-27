import React, { useState } from 'react';
import { useEffect } from 'react';
import Product from '../product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const handleAddToCart = (product) => {
        console.log(product)
    }

    return (
        <div className='container'>

            <div className="product-container">
                {/* <h3>This is products: {products.length}</h3> */}

                {
                    products.map(product =>
                        <Product key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        >

                        </Product>)
                }

            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>

            </div>
        </div>
    );
};

export default Shop;