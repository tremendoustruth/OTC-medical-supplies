import React from "react";
import { useState, useEffect } from "react"
import { Link } from "react-router";
// import styles from "./Product.module.css";



function Product({ products }) {
    const title = products[0].title
    const description = products[0].description
    const price = products[0].price
    return <>
        <p> {title} </p>
        <p>{description}</p>
        <p>{price}</p>
    </>
}


export default Product