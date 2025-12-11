import React, { useState } from "react";
import img1 from "../assests/1.png"
import img2 from "../assests/image.png"

const Home = () => {

  const [add, setadd] = useState(100);
  const [minus, setminus] = useState(200);
  const [mult, setmult] = useState(100 * 20);
  let [Name, setName] = useState("abi")
  const [img, setImg] = useState(img1);
  return (

    <div>
    <div className="p-3 border-blue-400 border-4 w-[400px] shadow-blue-500 ml-[33%] mt-[20px] shadow-lg text-white ">

      <h1 className="text-black  text-3xl text-center p-2 ">UseState</h1>
      <div className="text-center  p-2">
        <button onClick={() => setadd(add + 10)} className="boder-3  bg-pink-600 p-3 ">Increment</button>
        <h2 className="text-blue-700 text-xl">Increment :{add}</h2>
      </div>
      <div className="text-center  p-2" >
        <button onClick={() => setminus(minus - 50)} className="boder-3  bg-pink-600 p-3">Decrement</button>
        <h2 className="text-blue-700 text-xl">Decrement : {minus}</h2>
      </div>
      <div className="text-center  p-2 ">
        <button onClick={() => setmult(mult * 10)} className="boder-3  bg-pink-600 p-3 ">Multplicaion</button>
        <h2 className="text-blue-700 text-xl">mult : {mult}</h2>
      </div>
      <div className="text-center  p-2 ">
        <button onClick={() => setName("xxxxxxxx")} className="boder-3  bg-pink-600 p-4 ">UserName</button>
        <h2 className="text-blue-700 text-xl"> Name : {Name}</h2>
      </div>
      <div className=" text-center  p-2">
        <button onClick={() => setImg(img2)} className="boder-3  bg-pink-600 p-2  ">Image</button>
        <img src={img} alt="img" className="h-32 mt-5 ml-32" />
      </div>
    </div>
    </div>

  );
};

export default Home;

