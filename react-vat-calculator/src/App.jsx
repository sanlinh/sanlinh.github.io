import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const VAT_RATE = 0.07; // 7% VAT rate
  // let vat = 0;
  // let price = 0;  // regular variable, not state
  const [vat, setVat] = useState(0); // state variable
  const [price,setPrice] = useState(0); // state variable 


  function handleChange(event) {
    let price = event.target.value;
    console.log(price);
    // price = v;
    setPrice(price);
    setVat(price * VAT_RATE);
  }

  return (
    <>
      <h2>VAT Calculator</h2>
      <div className="card">
        Price:
        <input
          type="number"
          placeholder="Enter price"
          onChange={handleChange} />
        <button>Calculate VAT</button>
        <div>
          Price: {price}<br/>
          VAT Rate: {(VAT_RATE * 100).toFixed(2)}%<br/>
          VAT: {vat.toFixed(2)}<br/>
          Total: ..... <br/>
        </div>

      </div>
    </>

  )
}

export default App
