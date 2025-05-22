import React, { useState } from "react";
import LifecycleDemo from "./LifecycleDemo";
import "./App.css";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        {show ? "Unmount Component" : "Mount Component"}
      </button>
      {show && <LifecycleDemo />}
    </div>
  );
}

export default App;
