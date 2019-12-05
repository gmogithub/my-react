import React from 'react';
import './App.css';
import SkyJs, {render} from "./lib/SkyJs";


function useIncrement() {
  const [count, setCount]: any = SkyJs.useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return [count, increment];
}

// export default App;
/** @jsx SkyJs.createElement */

function Counter({ name }: { name: string }) {
  const [count, increment] = useIncrement();
  return <div>Bonjour {name} <button onClick={increment}>Increment {count}</button></div>
}

function step1() {
  const element = <div>
    <h1>Step1</h1>
    <Counter name={"greg"}/>
    <button onClick={step2}>next</button>
  </div>;
  render(element, document.getElementById("root"));
}

function step2() {
  const el = <div>
    <h1> Step 2</h1>
    <p>Greg ets plsu fort</p>
    <button onClick={step3}>Step3</button>
  </div>;
  render(el, document.getElementById("root"));
}

function step3() {
  const element = <div>
    <h1>Step3</h1>
    <button onClick={step1}>step1</button>
  </div>;
  render(element, document.getElementById("root"));
}


step1();