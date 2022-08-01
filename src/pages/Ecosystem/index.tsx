import React from "react";

import styles from "../../styles/Home.module.css";
import { useTranslation } from "next-i18next";
const Ecosystem = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.main}>
            <h1>{t("ecosystem.ecosystemText")}</h1>
        </div>
    );
};

export default Ecosystem;
