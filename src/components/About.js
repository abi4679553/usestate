import React, { useState } from 'react'

const About = () => {

  const [name, setName]= useState('')


const handleChange =()=>
{
  if(name !== '')
    alert("This is empty")
}

  return (
    <div>
      {/* <p className='text-2xl text-white bg-blue-700  w-fit p-2 text-center '>Content !!</p>
      <p className='text-xl bg-pink-600 text-white w-fit p-2 m-5'>Home</p>
      <p className='text-xl bg-pink-600 text-white w-fit p-2 m-5'>About</p>
      <p className='text-xl bg-pink-600 text-white w-fit p-2 m-5'>Contact</p>
      <p className='text-xl bg-pink-600 text-white w-fit p-2 m-5'>Delivery</p>
      <p>hfjqdlqwkequrjdmkLJWQURIUHQJFLKKJ  </p>
      */}
       
       <form>
        <input type='text' value={name} onChange={(e)=> setName(e.target.value)}/>
       </form>
<button onClick={handleChange}>Submit</button>

    </div>
  )
}

export default About
