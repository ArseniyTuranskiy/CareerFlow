import Link from "next/link";

import styles from "./site-footer.module.css";

const productLinks = [
  { href: "#product", label: "Product" },
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#start", label: "Get started" },
];

const projectLinks = [
  {
    href: "https://github.com/ArseniyTuranskiy/CareerFlow",
    label: "GitHub repository",
  },
  {
    href: "https://github.com/ArseniyTuranskiy/CareerFlow/blob/main/README.md",
    label: "Project README",
  },
  {
    href: "https://github.com/ArseniyTuranskiy/CareerFlow/blob/main/docs/PRODUCT.md",
    label: "Product roadmap",
  },
];

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandColumn}>
          <Link className={styles.brand} href="/" aria-label="CareerFlow home">
            Career<span>Flow</span>
          </Link>
          <p className={styles.description}>
            A focused workspace for turning career goals and daily work into
            measurable progress.
          </p>
        </div>

        <nav className={styles.linkColumn} aria-label="Footer product navigation">
          <h2>Product</h2>
          {productLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <nav className={styles.linkColumn} aria-label="Footer project navigation">
          <h2>Project</h2>
          {projectLinks.map((link) => (
            <a href={link.href} key={link.href} rel="noreferrer" target="_blank">
              {link.label}
              <span aria-hidden="true"> ↗</span>
            </a>
          ))}
        </nav>
      </div>

      <div className={styles.bottomBar}>
        <p>© 2026 CareerFlow. Built in public by Arseniy Turankiy.</p>
        <p>Next.js · React · TypeScript</p>
      </div>
    </footer>
  );
}
