import React, { useState } from "react";

const Home = () => {
  
  const [numbers, setNumbers] = useState([1, 2, 3, 5, 4]);
  const [newNumber, setNewNumber] = useState("");

  
  const maxValue = numbers.length > 0 ? Math.max(...numbers) : "No values";


  const addNumber = () => {
    if (newNumber === "") return;
    setNumbers([...numbers, parseInt(newNumber)]);
    setNewNumber("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Numbers: {numbers.join(", ")}</h1>
      <h2>Maximum Value: {maxValue}</h2>

      <input
        type="number"
        value={newNumber}
        onChange={(e) => setNewNumber(e.target.value)}
        placeholder="Enter number"
      />
      <button onClick={addNumber} style={{ marginLeft: "10px" }}>
        Add Number
      </button>
    </div>
  );
};

export default Home;
