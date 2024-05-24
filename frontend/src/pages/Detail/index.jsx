import React from "react"
import { useParams } from "react-router-dom"
import { FaRegSadCry } from "react-icons/fa";

function ProductDetail() {
    const { productId } = useParams()
    const thisProduct = productsData.find(prod => prod.id === productId)
    
    return (
        <div>
        <div>catdirmadim:<FaRegSadCry /></div>
            <h1>{thisProduct.name}</h1>
            <p>Price: ${thisProduct.price}</p>
            <p>{thisProduct.description}</p>
        </div>
    )
}

export default ProductDetail
