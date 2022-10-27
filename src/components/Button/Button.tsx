import classNames from "classnames";
import styles from "./Button.module.scss";

type ButtonProps = {
  label: string;
  disabled?: boolean;
};

export function Button({ label, disabled }: ButtonProps) {
  const classes = classNames(styles.Button, {
    [styles.disabled]: disabled,
  });
  return (
    <button disabled={disabled} className={classes}>
      {label}
    </button>
  );
}
