import { useState } from "react";
import "../src/Styles/counter.css";

function FunctionComponent() {
  const [count, setCount] = useState("0");

  function handleIncrease() {
    setCount(parseFloat(count + 1));
  }

  function handleDecrease() {
    if (count > 0) {
      setCount(parseFloat(count - 1));
    }
  }

  return (
    <div className="counter-box">
      <h2>Function Component</h2>
      <p>{count}</p>
      <div>
        <button onClick={handleIncrease} className="button increase">
          +
        </button>
        <button onClick={() => setCount("0")} className="button reset">
          Reset
        </button>
        <button value="0" onClick={handleDecrease} className="button decrease">
          -
        </button>
      </div>
    </div>
  );
}

export default FunctionComponent;
