"use client";

import { useState } from "react";
import styles from "./header.module.css";
import HeaderIcons from "./HeaderIcons";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.myHeader} role="banner">
      <div className={styles.headerTop}>
        <Link href="/">
          <h1 className={styles.logo}>Trendiva</h1>
        </Link>

        <button
          onClick={toggleMenu}
          className={styles.hamburger}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`${styles.mobileOverlay} ${
          isMenuOpen ? styles.navActive : styles.navHidden
        }`}
      >
        <nav className={styles.navLinks} aria-label="Mobile navigation">
          <Link className={styles.mobileLink} href="/" onClick={closeMenu}>
            Home
          </Link>
          <Link
            className={styles.mobileLink}
            href="/clothesProduct"
            onClick={closeMenu}
          >
            Shop
          </Link>
          <Link className={styles.mobileLink} href="/about" onClick={closeMenu}>
            About
          </Link>
        </nav>
        <div className={styles.centerSection}>
          <HeaderIcons closeMenu={closeMenu} />
        </div>
      </div>

      <div className={styles.headerContent}>
        <Link href="/">
          <span className={styles.logo}>Trendiva</span>
        </Link>

        <nav className={styles.navLinks} aria-label="Main navigation">
          <Link className={styles.link} href="/">
            Home
          </Link>
          <Link className={styles.link} href="/clothesProduct">
            Shop
          </Link>
          <Link className={styles.link} href="/about">
            About
          </Link>
        </nav>

        <div className={styles.centerSection}>
          <HeaderIcons />
        </div>
      </div>
    </header>
  );
};

export default Header;
