import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let currentCount = 5;
  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount((counter) => counter + 1);
    // setCount(counter=>counter+1);
    // setCount(counter=>counter+1);
    // setCount(counter=>counter+1);
  };

  const substractValue = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Durjoy GG</h1>
      <h2>Counter Value: {count}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={substractValue}>Substract Value</button>
    </>
  );
}

export default App;
