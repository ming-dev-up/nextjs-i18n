import React from "react";

import styles from "../../styles/Home.module.css";

import useTranslation from "next-translate/useTranslation";
const Ecosystem = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.main}>
            <h1>{t("sample:ecosystemText")}</h1>
        </div>
    );
};

export default Ecosystem;
