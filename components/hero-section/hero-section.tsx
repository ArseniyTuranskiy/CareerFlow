import styles from "./hero-section.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero} id="product" aria-labelledby="hero-title">
      <div className={styles.content}>
        <p className={styles.eyebrow}>Career progress, made visible</p>
        <h1 className={styles.title} id="hero-title">
          <span>Build a career</span>
          <span>you can measure.</span>
        </h1>
        <p className={styles.description}>
          Plan goals, track applications, and turn daily work into measurable
          progress.
        </p>

        <div className={styles.actions}>
          <a className={styles.primaryAction} href="#start">
            Start building
          </a>
          <a className={styles.secondaryAction} href="#demo">
            <span className={styles.playIcon} aria-hidden="true">
              ▶
            </span>
            View demo
          </a>
        </div>
      </div>
    </section>
  );
}
