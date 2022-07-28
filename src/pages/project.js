import React from "react";
import styles from "../styles/Home.module.css";

import { useTranslation } from "next-export-i18n";

const Project = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.main}>
            <h1>{t("project.projectText")}</h1>
        </div>
    );
};

export default Project;
