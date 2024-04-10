import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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

function App (props) {
  return (
    <button onClick={props.handleClick}>{props.children}</button>

  );

}

const btnEvent3 = () => {
  console.log(2345);
  console.log(this);
}

function App3 (props) {
  return (
    <button onClick={btnEvent3}>{props.name} {props.bbb}</button>

  );

}

export default App;

export { App3 };