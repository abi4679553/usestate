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
  const [minus ,setminus] = useState(200);
  const [mult ,setmult] = useState(100*20)





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
        <button onClick={() => setminus(minus-50)}>Decrement</button>
        <h2>Decrement : {minus}</h2>
        <button onClick={() => setmult(mult *10)}>Multplicaion</button>
        <h2>mult : {mult}</h2>





      </div>
    </div>
  );
};

export default Home;

// const [add, setadd] = useState(100);
//     const [state, setstate] = useState("saravanan");
//     const [color, setcolor] = useState("bg-red-600");
//     const [image, setImage] = useState(img1);


//     return (
//         <div>





//             <button onClick={() => setadd(add + 1)}>Increment</button>
//             <h1>{add}</h1>
//             <button onClick={() => setstate("abi")}>change</button>
//             <p>{state}</p