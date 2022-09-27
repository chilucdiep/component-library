import { useState } from "react";
import { SelectOption } from "../constants/Select.interface";
import styles from "./Select.module.scss";

type SingleSelectProps = {
  multiple?: false;
  selectedOption?: SelectOption;
  onChange: (selectedOption?: SelectOption) => void;
};

type MultipleSelectProps = {
  multiple: true;
  selectedOption: SelectOption[];
  onChange: (selectedOption: SelectOption[]) => void;
};

type SelectProps = {
  options: SelectOption[];
} & (SingleSelectProps | MultipleSelectProps);

function Select({ multiple, onChange, options, selectedOption }: SelectProps) {
  const [isOpen, setisOpen] = useState(false);

  const multipleValueMarkup = Array.isArray(selectedOption)
    ? selectedOption.map((option: SelectOption) => (
        <button
          className={styles.Button}
          key={option.value}
          onClick={(e) => {
            e.stopPropagation();
            selectOption(option);
          }}
        >
          <span className={styles.ButtonContainer}>
            {option.label}
            <span>&times;</span>
          </span>
        </button>
      ))
    : null;

  const valueMarkup = (
    <span className={styles.Value}>
      {multiple ? multipleValueMarkup : selectedOption?.label}
    </span>
  );

  const clearButtonMarkup = (
    <button
      className={styles.Button}
      onClick={(e) => {
        handleClearValue(e);
      }}
    >
      &times;
    </button>
  );

  const optionsMarkup = options.map((option) => (
    <li
      key={option.value}
      className={`${styles.Option} ${
        isOptionSelected(option) ? styles.Selected : ""
      }`}
      onClick={() => {
        selectOption(option);
      }}
    >
      {option.label}
    </li>
  ));

  return (
    <div
      className={styles.Container}
      tabIndex={0}
      onBlur={() => setisOpen(false)}
      onClick={() => setisOpen((prev) => !prev)}
    >
      {valueMarkup}
      {clearButtonMarkup}
      <span className={styles.Divider}></span>
      <span className={styles.Caret}></span>
      <ul
        className={`${styles.OptionsList} ${isOpen ? styles.ShowOptions : ""}`}
      >
        {optionsMarkup}
      </ul>
    </div>
  );

  function handleClearValue(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();

    if (multiple) {
      onChange([]);
    } else {
      onChange(undefined);
    }
  }

  function selectOption(option: SelectOption) {
    if (multiple) {
      if (selectedOption?.includes(option)) {
        onChange(selectedOption.filter((o) => o !== option));
      } else {
        onChange([...selectedOption, option]);
      }
    } else {
      if (option !== selectedOption) onChange(option);
    }
  }

  function isOptionSelected(option: SelectOption) {
    return multiple
      ? selectedOption?.includes(option)
      : option === selectedOption;
  }
}

export default Select;
