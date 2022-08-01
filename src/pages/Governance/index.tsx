import React from "react";

import styles from "../../styles/Home.module.css";

import useTranslation from "next-translate/useTranslation";
const Governance = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.main}>
            <h1>{t("sample:governanceText")}</h1>
        </div>
    );
};

export default Governance;
