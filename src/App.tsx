import { useState } from "react";
import CounterComponent from "./components/Counter";
import Select from "./components/Select";
import { SelectOption } from "./constants/Select.interface";

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
      multiple
      onChange={(option) => setSelectedOptions(option)}
      options={mockOptions}
      selectedOption={selectedOptions}
    />
  );

  return (
    <>
      <h1>Select Component (Single & Multi)</h1>
      {singleSelectComponentMarkup}
      <br />
      {multiSelectComponentMarkup}
      <br />
      <h1>Counter Component</h1>
      <CounterComponent />
    </>
  );
}

export default App;
