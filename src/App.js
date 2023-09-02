import makeRandomNumber from './utils';
import './App.css';
import { useEffect, useState, useRef } from 'react';

// When the price goes up, display the font in green
// When the price goes down, display the font in red

function App() {
  const [price, setPrice] = useState(0)
  const [color, setColor] = useState("black")
  const prevPriceRef = useRef(price)

  useEffect(()=>{
    const prevPrice = prevPriceRef.current

    console.log({price, prevPrice})

    if (price > prevPrice){
      setColor("green")
    } else if (price < prevPrice){
      setColor("red")
    } else{
      setColor("black")
    }

    prevPriceRef.current = price
}, [price])

  useEffect(()=>{
    const id = setInterval(()=>setPrice(makeRandomNumber), 1000);
    return function(){
      clearInterval(id);
    }
  }, [])

  return (
    <div className="App">
      <h1>TickerMaster</h1>
      <h2 style={{color: color}}>Price: {price}</h2>
    </div>
  );
}

export default App;
