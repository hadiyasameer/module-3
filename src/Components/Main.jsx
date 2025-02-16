import React from 'react'
import Carouselslide from './Carouselslide'
import Products from './Products'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Main() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setProducts(res.data)
                setLoading(false);
                console.log(res.data)
            })
            .catch(err=>{
                setLoading(false);
                console.error("Error fetching products:",err)
            })
    }, [])
    return (
        <div className='body'>
            <Carouselslide />
            <div className='productContainer'>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="row">
                    {products.map((product) => {
                        return (
                            <Products product={product} key={product.id} />
                        )
                    })}
                </div>
            )}
            </div>

        </div>
    )
}

export default Main