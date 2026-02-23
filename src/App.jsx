import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import { useState } from "react"
import Results from "./components/Results.jsx";
function App() {
  const [inputValue, setInputValue] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });
  const isInputValid = inputValue.duration >= 1;
  function handleInputValue(newVal, inputType) {
    setInputValue((prevValue) => {
      return {
        ...prevValue,
        [inputType]: +newVal,
      };
    });

  }
  return (
    <div>
      <Header></Header>

      <UserInput label="Initial Investment" onChangeInput={handleInputValue} inputValue={inputValue} />
      {!isInputValid && <p className="center">Please enter duration greater than 1 </p>}
      {isInputValid &&
        <Results userInputValue={inputValue} ></Results>}

    </div>
  )
}

export default App
