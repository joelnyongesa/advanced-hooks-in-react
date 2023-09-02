import { useState, useRef } from 'react';

function Counter(){
const [number, setNumber] = useState(0)
  let regularCount = 0
  const refNumber = useRef(0)


  // hadle increment of the number
  function handleClick(){
    setNumber((number)=>number+1)
    console.log(number)
  }

  // Handle increment of regular number.
  function handleRegularClick(){
    regularCount += 1
    console.log(regularCount)
  }

  function handleRefClick(){
    refNumber.current += 1
    console.log({refNumber})
  }
  console.log({number, regularCount, refNumber})


  return (
    <div className="App">
      <h1>Advanced Hooks Tutorials</h1>
      <button onClick={handleClick}>{number}</button>
      <button onClick={handleRegularClick}>{regularCount}</button>
      <button onClick={handleRefClick}>{refNumber.current}</button>
    </div>
  );
}

export default Counter;