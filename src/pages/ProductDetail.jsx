import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./ProductDetail.css"

const ProductDetail = ({addToCart}) => {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
    .then(data => setProduct(data))
  },[id])

  if(!product) return <p>Loading...</p>
  return (
    <div className="ProductDetail">
  <h2>{product.title}</h2>
  <img src={product.image} alt={product.title} />
  <p><strong>Price:</strong> ${product.price}</p>
  <p>{product.description}</p>
  <button onClick={() => addToCart(product)}>Add to Cart</button>
</div>
  )
}

export default ProductDetail
