import styles from "./ShippingCard.module.css"

function ShippingCard() {
    return (
        <section className={styles.card}>
            <h2 className={styles.title}>Shipping Information</h2>

            <div className={styles.field}>
                <label className={styles.label}>Name*</label>
                <span className={styles.value}>VaniTomBush</span>
            </div>

            <div className={styles.field}>
                <label className={styles.label}>Address*</label>
                <span className={styles.value}> 1234 Main St. Suite 100</span>
            </div>

            <div className={styles.field}>
                <label className={styles.label}>City*</label>
                <span className={styles.value}>Chicago</span>
            </div>

            <div className={styles.field}>
                <label className={styles.label}>State*</label>
                <span className={styles.value}>IL</span>
            </div>

            <div className={styles.field}>
                <label className={styles.label}>ZIP Code*</label>
                <span className={styles.value}>60607</span>
            </div>

            <div className={styles.field}>
                <label className={styles.label}>Shipping Method*</label>
                <span className={styles.value}>Standard: 5 business days</span>
            </div>
        </section>
    );
}

export default ShippingCard;