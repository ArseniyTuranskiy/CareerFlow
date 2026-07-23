import styles from "./how-it-works-section.module.css";

const processSteps = [
  {
    description: "Choose the career outcome you want to reach and define the next milestone.",
    title: "Set your direction",
  },
  {
    description: "Keep applications, tasks, goals, and learning plans in one focused workspace.",
    title: "Plan the work",
  },
  {
    description: "Complete meaningful actions and record progress while the details are still clear.",
    title: "Build momentum",
  },
  {
    description: "Use weekly insights to understand what worked and decide what to improve next.",
    title: "Review and improve",
  },
];

export function HowItWorksSection() {
  return (
    <section
      className={styles.section}
      id="how-it-works"
      aria-labelledby="how-it-works-title"
    >
      <div className={styles.container}>
        <div className={styles.headingGroup}>
          <p className={styles.eyebrow}>How it works</p>
          <h2 className={styles.heading} id="how-it-works-title">
            Turn direction into visible progress.
          </h2>
          <p className={styles.intro}>
            CareerFlow gives every career goal a simple, repeatable path from
            planning to reflection.
          </p>
        </div>

        <ol className={styles.steps}>
          {processSteps.map((step, index) => (
            <li className={styles.step} key={step.title}>
              <span className={styles.number} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
