import React, { useState, useEffect } from "react";

export default function CounterHook() {
  useEffect(() => {
    console.log("Mounted by hook");
    document.title = `You Clicked ${counter} times`;
  });

  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>You clicked {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Click me Hook</button>
    </div>
  );
}
