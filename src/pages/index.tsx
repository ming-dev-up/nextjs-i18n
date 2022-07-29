import React, { useState } from "react";
import Head from "next/head";
import Modal from "../components/Modal";
import styles from "../styles/Home.module.css";
import Image from "next/image";

import { useTranslation } from "next-export-i18n";

export default function Home() {
    const { t } = useTranslation();
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <Head>
                <title>Ledgis - The New Block Order</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>{t("ui.languageSwitcher")}</h1>
                <h2>{t("intro.introText")}</h2>

                <div className={styles.img}>
                    <Image
                        width={700}
                        height={475}
                        src={t("intro.introTestImage")}
                    />
                </div>

                <button
                    className={styles.btn}
                    onClick={() => setShowModal(true)}
                >
                    Modal
                </button>

                <Modal show={showModal} onClose={() => setShowModal(false)}>
                    모달창이라구우우우
                </Modal>
            </main>
        </div>
    );
}
