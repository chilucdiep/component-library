import styles from "./Button.module.scss";

type ButtonProps = {
  label: string;
};

export function Button({ label }: ButtonProps) {
  return <button className={styles.Button}>{label}</button>;
}
