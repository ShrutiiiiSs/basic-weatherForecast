
import React, { useState,useEffect } from 'react';

export const InputName =(props) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');


    useEffect(() => {
      if (props.city) {
        setValue(props.city);
      }
    }, []);
  

  const handleChange = (e) => {
    const x=e.target.value;
    const regex=/^[A-Za-z\s]*$/;
    if(regex.test(x)){
      setValue(x)
      setError("")
    }
    else{
      setError("dont type numbers")
      
    }

  };
  // const mouseClick = ()=>
  //   {
  //   console.log("event happeend")
  //   }

    
 

  return (
    <>
    <div>
      <label htmlFor="myInput">Enter something: </label>
      <input
        id="myInput"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type here..."
      />
      <button type="submit"  onClick={() => props.onClick(value)} className="btn btn-primary ms-3 ">Submit</button>
      <p>you typed here is  {value}</p>
      <p>{error}</p>

      
    </div>
    </>
  );
}