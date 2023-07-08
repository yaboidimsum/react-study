/* eslint-disable react/prop-types */
import { useState } from "react";
import Mybutton from "./components/Mybutton";

function Mycounter({ count }) {
  return <span style={{ margin: 30 }}>{count}</span>;
}

function App() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div>
      <Mybutton text={"-"} onClick={decrementCount} count={count} />
      <Mycounter count={count} />
      <Mybutton text={"+"} onClick={incrementCount} count={count} />
      <Mybutton text={"Reset!"} onClick={handleReset} count={count} />
    </div>
  );
}

export default App;
