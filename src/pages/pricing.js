import React from "react";
import styles from "../styles/Home.module.css";

import { useTranslation } from "next-export-i18n";

const Pricing = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.main}>
            <h1>{t("pricing.pricingText")}</h1>
        </div>
    );
};

export default Pricing;
