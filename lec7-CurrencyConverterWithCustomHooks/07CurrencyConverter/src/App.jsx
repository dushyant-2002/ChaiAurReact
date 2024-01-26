import { useState } from 'react'
// import InputBox from './components/InputBox'
// import InputBox from './components/index'
import {InputBox} from "./components"//by default it will search for index.js hence no need to write it
import useCurrencyInfo from './hooks/useCurrencyInfo'//our custom hook
// import './App.css'
function App() {
  const [amount,setAmount] = useState(0);
  const [from,setFrom] = useState("usd");
  const [to,setTo] = useState("inr");
  const [convertedAmount,setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);//return data about from currency
  const options = Object.keys(currencyInfo);//get all keys not values
  const BackgroundImage = "https://images.unsplash.com/photo-1584271369250-c2401da8d8e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvcmV4fGVufDB8fDB8fHww";

  const swap = ()=>{
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to]);
  }
  
  return (
    <div
        className="w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('${BackgroundImage}')`,
            backgroundSize:"100%"
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=>{
                              setFrom(currency)
                            }}
                            selectCurrency={from}
                            onAmountChange={(amount)=> setAmount(amount)}

                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                            
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                           label="To"
                           amount={convertedAmount}
                           currencyOptions={options}
                           onCurrencyChange={(currency)=>{
                             setTo(currency)
                           }}
                           amountDisable 
                           selectCurrency={to}
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
