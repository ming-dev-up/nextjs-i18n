import styles from "../styles/Home.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <h1>logo image</h1>
      </div>
      <div>
        <Link href="/">
          <a>intro</a>
        </Link>
        <Link href="/index">
          <a>Tech</a>
        </Link>
        <Link href="/">
          <a>Pricing</a>
        </Link>
        <Link href="/">
          <a>Coin</a>
        </Link>
        <Link href="/">
          <a>Project</a>
        </Link>
        <Link href="/">
          <a>Partners</a>
        </Link>
        <Link href="/">
          <a>News</a>
        </Link>
        <Link href="/">
          <a>Contact</a>
        </Link>
      </div>
      <div>kr/en</div>
      <div>
        <a></a>
      </div>
    </nav>
  );
};

export default Navbar;
