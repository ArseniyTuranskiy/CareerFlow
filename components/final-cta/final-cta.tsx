import styles from "./final-cta.module.css";

export function FinalCta() {
  return (
    <section className={styles.section} id="start" aria-labelledby="final-cta-title">
      <div className={styles.panel}>
        <p className={styles.eyebrow}>Your next step</p>
        <h2 className={styles.heading} id="final-cta-title">
          Make your career progress visible.
        </h2>
        <p className={styles.description}>
          Bring your applications, goals, skills, and weekly priorities into one
          focused workspace.
        </p>

        <div className={styles.actions}>
          <a className={styles.primaryAction} href="#product">
            Start with CareerFlow
          </a>
          <a className={styles.secondaryAction} href="#features">
            Explore features
          </a>
        </div>
      </div>
    </section>
  );
}
