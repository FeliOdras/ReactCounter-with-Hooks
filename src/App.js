import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterHook from "./components/CounterHook";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CounterHook />
      </header>
    </div>
  );
}

export default App;
