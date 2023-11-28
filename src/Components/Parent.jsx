import React, { useState } from 'react';
import Child from './Child';
import { useCallback } from 'react';

const Parent = () => {
  const [count1, setCount1] = useState(0);


  const incrementCount = () => {
    setCount1(count1 + 1);
  };

 
  const fun = () => {
    console.log("Function in Parent called");
  }; 
  /* 
  use callabck for uncessary rendering of element
  const fun = useCallback(() => {
    console.log("Function in Parent called");
  },[])
  //dependency array
  ; */ 
  

  
  return (
    <div>
      <h1>{count1}</h1>
      <button onClick={incrementCount}>Increment</button>
      <Child  fun={fun} />
    </div>
      );
    };
    
    export default Parent;
