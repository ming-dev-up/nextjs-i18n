import styles from "../styles/Home.module.css";
import Link from "next/link";

import {
    useTranslation,
    useLanguageQuery,
    LanguageSwitcher,
} from "next-export-i18n";

const Navbar = () => {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();

    return (
        <nav className={styles.nav}>
            <Link href="/">
                <h2>Logo Image</h2>
            </Link>

            <div className={styles.navLink}>
                <Link href="/">
                    <a>Intro</a>
                </Link>
                <Link href="/tech">
                    <a>Tech</a>
                </Link>
                <Link href="/pricing">
                    <a>Pricing</a>
                </Link>
                <Link href="/coin">
                    <a>Coin</a>
                </Link>
                <Link href="/project">
                    <a>Project</a>
                </Link>
                <Link href="/partners">
                    <a>Partners</a>
                </Link>
                <Link href="/news">
                    <a>News</a>
                </Link>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </div>

            <div className={styles.langSwitcher}>
                <LanguageSwitcher lang="kr">kr</LanguageSwitcher> |{" "}
                <LanguageSwitcher lang="en">en</LanguageSwitcher>
            </div>
        </nav>
    );
};

export default Navbar;
