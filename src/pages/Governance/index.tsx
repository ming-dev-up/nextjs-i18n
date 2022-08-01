import React from "react";
import styles from "../styles/Home.module.css";

import { useTranslation } from "next-i18next";
const Governance = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.main}>
            <h1>{t("governance.governanceText")}</h1>
        </div>
    );
};

export default Governance;
