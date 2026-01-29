import React from "react";
import { Link } from "react-router";
import styles from "./Product.module.css";



function Product({ title, description, price, id }) {

    return (
        <div className={styles.product}>
            <article>
                <Link to={`/post/${id}`} className={styles.title}><h2>{title}</h2></Link>
                <p className={styles.description}>{description}</p>
            </article>
        </div>
    )
}

export default Product