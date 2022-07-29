import React from "react";
import styles from "../styles/Home.module.css";

import { useTranslation } from "next-export-i18n";
const Coin = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.main}>
            <h1>{t("coin.coinText")}</h1>
        </div>
    );
};

export default Coin;
