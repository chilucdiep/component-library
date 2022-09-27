import { useState } from "react";
import Select from "./component/Select";
import { SelectOption } from "./constants/Select.interface";

const mockOptions = [
  { label: "First", value: 1 },
  { label: "2nd", value: 2 },
  { label: "3rd", value: 3 },
  { label: "4rth", value: 4 },
  { label: "5th", value: 5 },
];

function App() {
  const [selectedOption, setSelectedOption] = useState<
    SelectOption | undefined
  >(mockOptions[3]);

  const [selectedOptions, setSelectedOptions] = useState<SelectOption[]>([
    mockOptions[3],
  ]);

  return (
    <>
      <Select
        onChange={(option) => setSelectedOption(option)}
        options={mockOptions}
        selectedOption={selectedOption}
      />
      <br />
      <Select
        multiple
        onChange={(option) => setSelectedOptions(option)}
        options={mockOptions}
        selectedOption={selectedOptions}
      />
    </>
  );
}

export default App;
