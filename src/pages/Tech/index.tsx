import React from "react";

import styles from "../../styles/Home.module.css";

import useTranslation from "next-translate/useTranslation";

const Tech = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.main}>
            <h1>{t("sample:techText")}</h1>
        </div>
    );
};

export default Tech;
