import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProduct() {
            const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
            setProduct(response.data);
            setLoading(false);
        }
        fetchProduct();
    }, [productId])
    if (loading) return <div>Loading... </div>

    return (
        <>
            <h1 className='title'>{product.title}</h1>
            <div className='showProductDetails'>
                <div className='img-div'>
                    <img src={product.image}/>
                </div>
                <div className='description-div'>
                    <p>{product.description}</p>
                </div>
            </div>
        </>
    )
}

export default ProductDetails