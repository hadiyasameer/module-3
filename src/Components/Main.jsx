import React from 'react'
import Carouselslide from './Carouselslide'
import Products from './Products'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Main() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setProducts(res.data)
                console.log(res.data)
            })

    }, [])
    return (
        <div className='body'>
            <Carouselslide />
            <div className='productContainer'>
                <div className="row">
                    {products.map((product, index) => {
                        return (
                            <Products product={product} key={index} />
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Main