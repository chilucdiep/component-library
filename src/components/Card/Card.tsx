import styles from "./Card.module.scss";

type CardProps = {
  side?: React.ReactNode;
  children?: React.ReactNode;
  subtitle?: string;
  title: string;
};

export function Card({ side, children, subtitle, title }: CardProps) {
  return (
    <section className={styles.Card}>
      <div className={styles.Header}>
        <div className={styles.TitleSection}>
          <span className={styles.Title}>{title}</span>
          <span className={styles.Subtitle}>{subtitle}</span>
        </div>
        <div className={styles.Side}>{side}</div>
      </div>
      <div className={styles.Main}>{children}</div>
    </section>
  );
}
