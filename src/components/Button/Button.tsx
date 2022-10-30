import classNames from "classnames";
import styles from "./Button.module.scss";

type ButtonProps = {
  label: string;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  onClick?(e?: any): void;
};

export function Button({
  label,
  disabled,
  variant = "secondary",
  onClick,
}: ButtonProps) {
  const classes = classNames(styles.Button, {
    [styles.disabled]: disabled,
    [styles.primary]: variant === "primary",
  });
  
  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
}
