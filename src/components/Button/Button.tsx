import classNames from "classnames";
import styles from "./Button.module.scss";

type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick?(e?: any): void;
};

export function Button({ label, disabled, onClick }: ButtonProps) {
  const classes = classNames(styles.Button, {
    [styles.disabled]: disabled,
  });
  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
}
