import React from 'react';
import './App.css';
import {render} from "./lib/SkyJs";
import SkyJs from "./lib/SkyJs";
// const App: React.FC = () => {
//   return (
//     null
//   );
// }

// export default App;
/** @jsx SkyJs.createElement */
const element = <div>
  <h1>Bienvenue sur le site</h1>
  <a href={"#"}>link</a>
</div>;
render(element, document.getElementById("root"));

setTimeout(() => {
  const el = <div>
    {/*<h1>Bienvenue sur le site</h1>*/}
    <a href={"#"}>link</a>
  </div>;
  render(el, document.getElementById("root"));

}, 2000);