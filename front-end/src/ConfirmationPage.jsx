import { Link } from "react-router-dom";
import styles from "./ConfirmationPage.module.css"

function ConfirmationPage() {
    return (
        <div className={styles.page}>
            <div className={styles.check}>
                ✓
            </div>
            <h1 className={styles.confirm}>
                Order Confirmed!
            </h1>
        </div>
    )
}

export default ConfirmationPage;