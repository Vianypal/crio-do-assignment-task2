import React from 'react';

/* const Child =React.memo(({  fun }) => { */
const Child =(({  fun }) => {
    console.log("Child component re-rendered");
  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={fun}> Parent Function called</button>
    </div>
  );
});

export default Child;