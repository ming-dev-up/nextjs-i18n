import styles from "../styles/Layouts.module.css";

export default function Footer() {
    return (
        <div>
            <footer className={styles.footer}>
                <a>official@ledgis.io</a>
                <a>Copyright © LEDGIS. All rights reserved.</a>
            </footer>
        </div>
    );
}
