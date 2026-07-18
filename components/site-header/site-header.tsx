"use client";

import Link from "next/link";
import { useState } from "react";

import styles from "./site-header.module.css";

const navigationItems = [
  { href: "#product", label: "Product" },
  { href: "#features", label: "Features" },
  { href: "#roadmap", label: "Roadmap" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header
      className={styles.header}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          closeMenu();
        }
      }}
    >
      <div className={styles.inner}>
        <Link className={styles.brand} href="/" aria-label="CareerFlow home">
          Career<span>Flow</span>
        </Link>

        <nav className={styles.navigation} aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <a className={styles.navigationLink} href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a className={styles.loginLink} href="#login">
            Log in
          </a>
          <a className={styles.startLink} href="#start">
            Start
          </a>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonOpen : ""}`}
          onClick={() => setIsMenuOpen((currentState) => !currentState)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {isMenuOpen && (
        <nav
          className={styles.mobileMenu}
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {navigationItems.map((item) => (
            <a
              className={styles.mobileNavigationLink}
              href={item.href}
              key={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <div className={styles.mobileActions}>
            <a className={styles.mobileLoginLink} href="#login" onClick={closeMenu}>
              Log in
            </a>
            <a className={styles.mobileStartLink} href="#start" onClick={closeMenu}>
              Start
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
