import styles from "./dashboard-preview.module.css";

const focusItems = [
  { completed: true, label: "Update portfolio case study" },
  { completed: false, label: "Apply to 5 product roles" },
  { completed: false, label: "Prepare interview examples" },
];

export function DashboardPreview() {
  return (
    <div className={styles.frame} aria-label="CareerFlow dashboard preview">
      <aside className={styles.rail} aria-hidden="true">
        <span className={styles.railMark}>C</span>
        <span className={`${styles.railItem} ${styles.railItemActive}`}>⌂</span>
        <span className={styles.railItem}>▣</span>
        <span className={styles.railItem}>◎</span>
      </aside>

      <div className={styles.dashboard}>
        <div className={styles.dashboardHeader}>
          <div>
            <p className={styles.kicker}>Career workspace</p>
            <h2 className={styles.heading}>Overview</h2>
          </div>
          <span className={styles.period}>This week⌄</span>
        </div>

        <div className={styles.metrics}>
          <article className={`${styles.card} ${styles.progressCard}`}>
            <div className={styles.progressRing} aria-label="72 percent complete">
              <span>72%</span>
            </div>
            <div>
              <p className={styles.cardLabel}>Weekly progress</p>
              <strong className={styles.positive}>Great progress</strong>
            </div>
          </article>

          <article className={styles.card}>
            <p className={styles.cardLabel}>Applications</p>
            <strong className={styles.metricValue}>12</strong>
            <span className={styles.metricDetail}>+20% this week</span>
          </article>

          <article className={styles.card}>
            <p className={styles.cardLabel}>Career goals</p>
            <strong className={styles.metricValue}>3</strong>
            <span className={styles.metricDetail}>Active goals</span>
          </article>
        </div>

        <section className={styles.focusCard} aria-labelledby="weekly-focus-title">
          <div className={styles.focusHeader}>
            <h3 id="weekly-focus-title">Weekly focus</h3>
            <span>2 of 5 complete</span>
          </div>
          <ul className={styles.focusList}>
            {focusItems.map((item) => (
              <li className={styles.focusItem} key={item.label}>
                <span
                  className={`${styles.check} ${item.completed ? styles.checkComplete : ""}`}
                  aria-hidden="true"
                >
                  {item.completed ? "✓" : ""}
                </span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
