import styled from "styled-components";
import styles from "./TextField.module.scss";

type TextFieldProps = {
  placeholder?: string;
  maxWidth?: string;
  onChange?(e?: any): void;
};

export function TextField({ placeholder, maxWidth="100%", onChange }: TextFieldProps) {
  const TextField = styled.input`
    width: ${maxWidth};
  `;

  return (
    <input
      className={styles.TextField}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  );
}
