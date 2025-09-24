import { useState } from "react";
import "../src/Styles/counter.css";

function FunctionComponent() {
  const [count, setCount] = useState("0");

  return (
    <div className="counter-box">
      <h2>Function Component</h2>
      <p>{count}</p>
      <div>
        <button
          onClick={() => setCount(parseFloat(count + 1))}
          className="button increase"
        >
          +
        </button>
        <button onClick={() => setCount("0")} className="button reset">
          Reset
        </button>
        <button onClick={() => setCount(count - 1)} className="button decrease">
          -
        </button>
      </div>
    </div>
  );
}

export default FunctionComponent;
