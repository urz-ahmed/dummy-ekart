import React from 'react'
import '../css/ProductCard.css'
import { FaStar } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
const ProductCard = ({ title, description, price, discountPercentage, rating, stock, brand,thumbnail,handleCartAdd ,product}) => {
    return (
        <>
            <div className="card">
                <div className="image-container">
                    <img src={thumbnail} alt={title}></img>

                    <div className="price">$ {price}</div>
                </div>

                <div className="content">
                    <div className="brand">{title}</div>
                    <div className="product-name">{description}</div>
                    <div className="mid-container">
                        <ul>
                            <li>Discount: {discountPercentage}%</li>
                            <li>Stock: {stock}</li>
                            <li>Brand: {brand}</li>
                        </ul>
                    </div>
                </div>

                <div className="button-container">
                    <button className=""><div className="rating">
                        Rating
                        <FaStar /> ({rating})
                    </div></button>
                    <button className="buy-button" onClick={()=>handleCartAdd(product)}>
                        Add to cart    <FaCartPlus />
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProductCard