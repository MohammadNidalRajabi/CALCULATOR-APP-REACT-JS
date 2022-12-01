import { useState } from "react";

function App() {
  const [calculatour,setCalculatour]=useState("");
  const [result,setResult]=useState("");
  const oprators=['+','-','*','/'];
  const UpdateCalc=(value)=>{
    if(oprators.includes(value)&&calculatour===''||
      oprators.includes(value)&&oprators.includes(calculatour.slice(-1))
    )
    {
      return;
    }
    setCalculatour(calculatour+value);
    if(!oprators.includes(value))
    {
      setResult(eval(calculatour+value).toString());
    }
     
  }
  const createDigits=()=>{
    const digits=[];
    for (let index = 1; index < 10; index++){
      digits.push(<button onClick={()=>UpdateCalc( index.toString())} key={index}>{index}</button>);
      
     
    }
    return digits;
  }
  const calculat=()=>{
    setCalculatour(eval(calculatour).toString());
  }
  const deletee=()=>
  {
    setResult('');
    setCalculatour('');
  }
  return (
    <div className="App">
      <div className="Calculatour">
        <div className="display">
          {
            result? <span>({result})</span>:''
          }
          {
            calculatour||"0"
          }
         
          
        </div>
        <div className="oprators">
          <button onClick={()=>UpdateCalc('/')}>/</button>
          <button onClick={()=>UpdateCalc('*')}>*</button>
          <button onClick={()=>UpdateCalc('+')}>+</button>
          <button onClick={()=>UpdateCalc('-')}>-</button>
          <button onClick={deletee}>Dell</button>
        </div>
        <div className="digits ">
          {createDigits()}
          <button onClick={()=>UpdateCalc('0')} >0</button>
          <button onClick={()=>UpdateCalc('.')} >.</button>
          <button onClick={calculat} >=</button>

          
          
        </div>

      </div>
    </div>
  );
}

export default App;
