import React, { useState } from "react";

function App() {
  /* You will need to use a boolean state to manage the weather */
  const [isRaining, setIsRaining] = useState(false);
  const [title, setTitle] = useState("it’s sunny");
  const [backgroundColor, setBackgroundColor] = useState("sunny");

  function onSunClick() {
    // Complete this code when we click on Sunny Time
    setIsRaining(false);
    getTitle();
    getBackgroundColor();
  }

  function onRainClick() {
    // Complete this code when we click on Sunny Time
    setIsRaining(true);
    getTitle();
    getBackgroundColor();
  }

  function getTitle() {
    // This function manage the H1 text, depending on the weather
    if (isRaining) {
      setTitle("it’s raining");
    } else {
      setTitle("it’s sunny");
    }
  }

  function getBackgroundColor() {
    // This function manage the main class value, depending on the weather
    if (isRaining) {
      setBackgroundColor("rainy");
    } else {
      setBackgroundColor("sunny");
    }
  }

  return (
    <main className={backgroundColor}>
      <h1>{title}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
