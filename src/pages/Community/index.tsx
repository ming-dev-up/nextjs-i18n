import React from "react";
import styles from "../../styles/Home.module.css";

import useTranslation from "next-translate/useTranslation";

const Community = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.main}>
            <h1>{t("sample:communityText")}</h1>
        </div>
    );
};

export default Community;
