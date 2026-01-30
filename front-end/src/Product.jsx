import React from "react";
import { useState, useEffect } from "react"
import { Link } from "react-router";
import styles from "./Product.module.css";



function Product({ title, description, price, url, id }) {
    return <>
        <div className={styles.productCard}>
            <div className={styles.productPlaceholder}>Product Image Here</div>
            <p className={styles.title}> {title} </p>
            <p className={styles.description}>{description}</p>
            <p className={styles.price}>${price}</p>
        </div>
    </>
}

export default Product