import styles from "./Card.module.scss";

type CardProps = {
  title: string;
  subtitle?: string;
  side?: React.ReactNode;
  children?: React.ReactNode;
};

export function Card({ title, subtitle, side, children }: CardProps) {
  const titleSectionMarkup = (
    <div className={styles.TitleSection}>
      <span className={styles.Title}>{title}</span>
      <span className={styles.Subtitle}>{subtitle}</span>
    </div>
  );

  const headerMarkup = (
    <div className={styles.Header}>
      {titleSectionMarkup}
      <div className={styles.Side}>{side}</div>
    </div>
  );

  return (
    <section className={styles.Card}>
      {headerMarkup}
      <div className={styles.Main}>{children}</div>
    </section>
  );
}
