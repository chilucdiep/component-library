import { Dispatch, SetStateAction } from "react";
import styles from "./SingleCounter.module.scss";

type CounterProps = {
  counter: number;
  isDisabled: boolean;
  setCounter: Dispatch<SetStateAction<number>>;
  setisDisabled: Dispatch<SetStateAction<boolean>>;
};

export function SingleCounter({
  counter,
  isDisabled,
  setCounter,
  setisDisabled,
}: CounterProps) {
  return (
    <div className={styles.CounterContainer}>
      <button
        className={styles.Button}
        disabled={isDisabled}
        onClick={() => decrement()}
      >
        -
      </button>
      <p>{counter}</p>
      <button
        className={styles.Button}
        disabled={isDisabled}
        onClick={() => increment()}
      >
        +
      </button>
      <button className={styles.Button} onClick={() => handleDisable()}>
        {isDisabled ? "Enable" : "Disable"}
      </button>
    </div>
  );

  function decrement() {
    setCounter((prev) => prev - 1);
  }

  function increment() {
    setCounter((prev) => prev + 1);
  }

  function handleDisable() {
    setisDisabled((prev) => !prev);
  }
}
