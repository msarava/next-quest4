import Head from "next/head";
import Link from "next/link";

import styles from "./Layout.module.css";

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <a className={styles.homelink} href="/">
            Be Wild
          </a>
        </Link>
        <nav>
          <Link href="/about">
            <a className={styles.navlink} href="/about">
              About
            </a>
          </Link>
          <Link href="/terms">
            <a className={styles.navlink} href="/terms">
              Terms of use
            </a>
          </Link>
        </nav>
      </header>
      <main className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <title>{pageTitle ? `${pageTitle} - ` : ""}Our Website</title>
        </Head>

        {children}
      </main>
      <footer className={styles.footer}>
        <p>
          Made with{" "}
          <span role="img" aria-label="love">
            💗
          </span>{" "}
          by{" "}
          <a target="_blank" rel="noreferrer" href="https://wildcodeschool.com">
            Wild Code School
          </a>
        </p>
      </footer>
    </>
  );
}
