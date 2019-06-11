import React, { useState } from "react";

export default function CounterHook() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>You clicked {counter} times.</p>
      <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>
        Click me Hook
      </button>
    </div>
  );
}
