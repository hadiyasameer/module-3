import React from 'react'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"

function Products(props) {

  return (
    <div className='col-lg-3 col-md-4 col-sm-6 my-4'>
      <Card className="productItem" style={{ width: '18rem' }}>
        <Card.Img variant="top" className='productImage' src={props.product.image} />
        <Card.Body className='card-body'>
          <Card.Title className='productTitle'>{props.product.title}</Card.Title>
          <div className="card-actions">
          <Link to ={`/product/${props.product.id}`}>
            <Button variant="primary" className='viewButton'>View</Button>
          </Link>
          <Button variant="info" className='addButton'>Add to Cart</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Products