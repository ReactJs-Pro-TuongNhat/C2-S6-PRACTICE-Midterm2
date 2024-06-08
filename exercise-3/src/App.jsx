import React, { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [notification, setNotification] = useState("");

  /* You will need some function to handle the key pressed and button events */
  function onA(event) {
    const value = event.target.value;
    if (isNaN(value)) {
      setNotification("Please enter a number at A");
    } else {
      setNotification("");
    }
    setA(parseInt(value));
  }

  function onB(event) {
    const value = event.target.value;
    if (isNaN(value)) {
      setNotification("Please enter a number at B");
    } else {
      setNotification("");
    }
    setB(parseInt(value));
  }

  function handleCompute() {
    setC(a + b);
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled value={notification ? notification : c} className={notification ? "error" : ""} />

      <button onClick={handleCompute} >Compute</button>
    </main>
  );
}

export default App;
