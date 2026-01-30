import React from "react";
import { useState, useEffect } from "react"
import { Link } from "react-router";
import styles from "./Product.module.css";

    
         
function Product({ title, description, price, url, id, onAddToCart }) {
    return <>
        <div className={styles.productCard}>
            <div className={styles.productPlaceholder}>Product Image Here</div>
            <p className={styles.title}> {title} </p>
            <p className={styles.description}>{description}</p>
            <p className={styles.price}>${price}</p>
            <button className={styles.addToCartBtn} onClick={() => onAddToCart({ title, description, price, url, id })}>
                Add to Cart
            </button>
        </div>
    </>
}

export default Product