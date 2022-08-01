import React, { useEffect } from "react";
import styles from "../../../styles/Layouts.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";

const Navbar = () => {
    const { t } = useTranslation();

    const router = useRouter();

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href="/">
                    <h2>Logo Image</h2>
                </Link>
            </div>

            <div className={styles.navLink}>
                <Link passHref href="/">
                    <a>Intro</a>
                </Link>
                <Link passHref href="/Community">
                    <a>Tech</a>
                </Link>
                <Link passHref href="/Ecosystem">
                    <a>Ecosystem</a>
                </Link>
                <Link passHref href="/Governance">
                    <a>Governance</a>
                </Link>
                <Link passHref href="/Community">
                    <a>Community</a>
                </Link>
            </div>

            <div>
                <ul>
                    {router.locales.map(locale => (
                        <li key={locale}>
                            <Link href={router.asPath} locale={locale}>
                                <a>{locale}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
