import Link from 'next/link';
import Head from 'next/head';
import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <>
        <Head>
            <title>Shoaib Arshad</title>
        </Head>
        <nav className={styles.nav}>
        <ul className={styles.navList}>
            <li className={styles.navItem}>
            {/* <Link href="/home"> */}
                <a href='/home' className={styles.navLink}>Home</a>
            {/* </Link> */}
            </li>
            <li className={styles.navItem}>
            {/* <Link href="/projects"> */}
                <a href='/projects' className={styles.navLink}>Projects</a>
            {/* </Link> */}
            </li>
        </ul>
        </nav>
    </>
  );
};

export default Navbar;
