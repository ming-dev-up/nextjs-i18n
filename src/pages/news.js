import React from "react";
import styles from "../styles/Home.module.css";

import { useTranslation } from "next-export-i18n";
const News = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.main}>
            <h1>{t("news.newsText")}</h1>
        </div>
    );
};

export default News;
