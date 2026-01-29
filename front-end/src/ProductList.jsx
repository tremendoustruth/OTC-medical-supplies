
import Product from "./Product";
import React from "react";
import styles from "./ProductList.module.css";
import { Link } from "react-router"

function ProductList({ products }) {

    if (products.length === 0) {
        return <p>No products available.</p>
    }

    return (
        <main>
            <h1>All Products:</h1>
            <div className={styles.productList}>
                {products.map((product) => (
                    <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        description={product.description}
                        url={post.url} />
                ))}
            </div>
        </main>
    )

}

export default ProductList