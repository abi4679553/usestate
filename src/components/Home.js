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


  const [add, setadd] = useState(100);
  const [minus, setminus] = useState(200);
  const [mult, setmult] = useState(100 * 20);
  let [state, setstate] = useState("abi")
  const [color, setColor] = useState("bg-pink-500");



  return (
    <div>
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
      <div className="p-8">
        <button onClick={() => setadd(add + 10)}>Increment</button>
        <h2>Increment :{add}</h2>
        <button onClick={() => setminus(minus - 50)}>Decrement</button>
        <h2>Decrement : {minus}</h2>
        <button onClick={() => setmult(mult * 10)}>Multplicaion</button>
        <h2>mult : {mult}</h2>
        <button onClick={() => setstate("saravanan")}>state</button>
        <h2> state :{state}</h2>
        <div  className={` p-5 w-fit  mt-5  text-white ${color}`}>
        <button onClick={() => setColor("bg-blue-500")}>Changecolor</button>
        <h2>color :{color}</h2>
        </div>





      </div>
    </div>
  );
};

export default Home;

