import React from 'react'
import {useState} from 'react';
import './App.css';

export default function App() 
{
    const [result, setResult] = useState(''); 
    const clicked = (e) =>{
     setResult(result.concat(e.target.name));   
    }
    const clear = (e) =>{
        setResult('');
    }
    const backspace = () =>{
      setResult(result.slice(0, -1));
    }
    const calculate = () =>{
        try{
            setResult(eval(result).toString());
        }
        catch(err){
        setResult('error');
        }
       
    }
  return(
        <>
            <div className="container">
                <form>
                    <input type="text" value={result}/>
                </form>
                <div className="keypad">
                    <button onClick={clear} id="clear">AC</button>
                    <button onClick={backspace} className="spcl">C</button>
                    <button className="spcl" name="/" onClick={clicked}>&divide;</button>
                    <button name="7" onClick={clicked}>7</button>
                    <button name="8" onClick={clicked}>8</button>
                    <button name="9" onClick={clicked}>9</button>
                    <button className="spcl" name="*" onClick={clicked}>&times;</button>
                    <button name="4" onClick={clicked}>4</button>
                    <button name="5" onClick={clicked}>5</button>
                    <button name="6" onClick={clicked}>6</button>
                    <button className="spcl" name="-" onClick={clicked}>&ndash;</button>
                    <button name="1" onClick={clicked}>1</button>
                    <button name="2" onClick={clicked}>2</button>
                    <button name="3" onClick={clicked}>3</button>
                    <button className="spcl" name="+" onClick={clicked}>+</button>
                    <button name="0" onClick={clicked}>0</button>
                    <button name="." onClick={clicked}>.</button>
                    <button onClick={calculate} id="result">=</button>
                </div>
            </div>
        </>
    )
}
