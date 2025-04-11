import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./ProductList.css"

const ProductList = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate();
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then((data)=> {
      setProducts(data)
    })
  },[])

  return (
    <div className="ProductGrid">
  {products.map((product) => (
    <div
      key={product.id}
      className="ProductCard"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
    </div>
  ))}
</div>
  )
}

export default ProductList
