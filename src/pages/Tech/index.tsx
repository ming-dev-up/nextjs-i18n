import React from "react";
import styles from "../styles/Home.module.css";

import { useTranslation } from "next-i18next";
const Tech = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.main}>
            <h1>{t("tech.techText")}</h1>
        </div>
    );
};

export default Tech;
