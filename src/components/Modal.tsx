import React, { useEffect, useRef, useState } from "react";

import styles from "../styles/Modal.module.css";

import ReactDOM from "react-dom";
import Link from "next/link";

function Modal({ show, onClose, children }) {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleClose = e => {
        e.preventDefault();
        onClose;
    };

    const modalContent = show ? (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <Link href="/" onClick={handleClose}>
                        <button className={styles.btn}>Close</button>
                    </Link>
                </div>
                <div className={styles.body}>{children} </div>
            </div>
        </div>
    ) : null;
    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        );
    } else {
        return null;
    }
}

export default Modal;
