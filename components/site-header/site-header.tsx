import Link from "next/link";

import styles from "./site-header.module.css";

const navigationItems = [
  { href: "#product", label: "Product" },
  { href: "#features", label: "Features" },
  { href: "#roadmap", label: "Roadmap" },
];

export function SiteHeader() {
  return (
    <header className={styles.header}>
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
      </div>
    </header>
  );
}
