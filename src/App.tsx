import React from 'react';
import { Input } from './componets/Input';
//import { Timer } from './componets/Timer';


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  function processInput(value: string): string {
    // console.log(`APP component received value "${value}"`);
    let res: string = '';
    if (value.toLowerCase().includes("hello")) {
      res = "Get tired from HELLO. It's forbidden word";
    }
    return res;
  }
  return <Input inputId={'input-1'} inputProcess={processInput} />
}

export default App;
