import React, { useEffect, useState } from "react";

import styles from "../../styles/Modal.module.css";

import ReactDOM from "react-dom";
import Link from "next/link";

function Modal({ show, onClose, children }) {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleClose = (e: any) => {
        e.preventDefault();
        onClose();
    };

    // const noMoreModalToday = (e: any) => {};

    const modalContent = show ? (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <Link href="#">
                        <button onClick={handleClose}>Close</button>
                    </Link>
                </div>
                <div>{children}</div>
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
