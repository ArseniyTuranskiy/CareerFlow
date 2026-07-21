import styles from "./features-section.module.css";

const features = [
  {
    description: "See your momentum through clear weekly summaries and focused insights.",
    icon: "↗",
    title: "Weekly progress",
  },
  {
    description: "Organize opportunities and move every application through one pipeline.",
    icon: "▣",
    title: "Applications",
  },
  {
    description: "Turn meaningful career goals into milestones and actionable next steps.",
    icon: "◎",
    title: "Career goals",
  },
  {
    description: "Track the skills you are building and focus on what creates the most impact.",
    icon: "✦",
    title: "Skills",
  },
];

export function FeaturesSection() {
  return (
    <section className={styles.section} id="features" aria-labelledby="features-title">
      <div className={styles.container}>
        <div className={styles.headingGroup}>
          <p className={styles.eyebrow}>One career workspace</p>
          <h2 className={styles.heading} id="features-title">
            Keep every next step connected.
          </h2>
          <p className={styles.intro}>
            CareerFlow brings planning, applications, learning, and progress into
            one focused system.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature) => (
            <article className={styles.card} key={feature.title}>
              <span className={styles.icon} aria-hidden="true">
                {feature.icon}
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
