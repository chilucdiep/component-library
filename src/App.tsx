import { useState } from "react";
import { Card } from "./components/Card";
import { Counter } from "./components/Counter/Counter";
import { Select } from "./components/Select";
import { Button } from "./components/Button";
import { SelectOption } from "./components/Select/types/Select.interface";
import { TextField } from "./components/TextField";

// This App component allows me to display the use cases of my component library as examples.

const mockOptions = [
  { label: "First", value: 1 },
  { label: "2nd", value: 2 },
  { label: "3rd", value: 3 },
  { label: "4rth", value: 4 },
  { label: "5th", value: 5 },
];

function App() {
  // Example of implmentation of the Single Select component
  const [selectedOption, setSelectedOption] = useState<
    SelectOption | undefined
  >(mockOptions[3]);

  const singleSelectComponentMarkup = (
    <Select
      maxWidth="500px"
      onChange={(option) => setSelectedOption(option)}
      options={mockOptions}
      selectedOption={selectedOption}
    />
  );

  // Example of implmentation of the Multi-Select component
  const [selectedOptions, setSelectedOptions] = useState<SelectOption[]>([
    mockOptions[3],
  ]);

  const multiSelectComponentMarkup = (
    <Select
      maxWidth="500px"
      multiple
      onChange={(option) => setSelectedOptions(option)}
      options={mockOptions}
      selectedOption={selectedOptions}
    />
  );

  const cardComponentMarkup = (
    <Card
      title="Card title"
      subtitle="Issa subtitle"
      maxWidth="500px"
      side={
        <>
          <Button label="Button" variant="primary" />
          <Button label="Button disabled" disabled={true} variant="primary" />
        </>
      }
    >
      <p>Content text</p>
    </Card>
  );

  const buttonComponentMarkup = (
    <>
      <Button label="Button primary" variant="primary" />
      <br />
      <br />
      <Button
        label="Button primary disabled"
        variant="primary"
        disabled={true}
      />
      <br />
      <br />
      <Button label="Button label" />
      <br />
      <br />
      <Button label="Button disabled" disabled={true} />
    </>
  );

  return (
    <>
      <h1>Select Component (Single & Multi)</h1>
      {singleSelectComponentMarkup}
      <br />
      <br />
      {multiSelectComponentMarkup}
      <br />
      <br />
      <h1>Counter Component</h1>
      <Counter />
      <br />
      <br />
      <h1>Card Component</h1>
      {cardComponentMarkup}
      <br />
      <br />
      <h1>Button Component</h1>
      {buttonComponentMarkup}
      <br />
      <br />
      <h1>Text Field Component</h1>
      <TextField maxWidth="100%" />
    </>
  );
}

export default App;
