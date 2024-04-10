import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { App3 as Eww } from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const showOne = false;

const styleArg = { color: "red" };

const mutliBtn = () => {
  var btns = [];
  for(let i = 0; i < 4; i++){
    btns.push(<button>我是第{i}個按鈕</button>);
  }

  return btns;
};

const btnEvent = (event) => {
  console.log(event.target.value);
  console.log(new Date());

}

const btnEvent2 = (msg) => {
  console.log("btnEvent2");
  console.log(msg);
}



const btnChange = () => {
  console.log("rrtt");

}

const testBtn = () => {
  return(
    <div>
      <h1 style={styleArg}>{showOne ? "dgsdfg" : "hello test!!"}</h1>
      <button value={true} onClick={btnEvent} msg="GGTT">我我我</button>
      <button value onChange={btnChange}>sdgsdg2</button>
      <button value={false} onClick={(e) => {btnEvent2("BBNN")}}>sdgsdg3</button>
      {mutliBtn()}
      <button value={false} onClick={(e) => {btnEvent2("BBNN")}}>sdgsdg3</button>
    </div>
  );

}

function App2 () {
  return (
    <button>我是誰</button>
  );

}

function Progress2 () {
  const barWidth="50%";

  return (
    <div>
        <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
          <div className="progress-bar" style={{backgroundColor:"#fe5196",width:barWidth,height:"100%",borderRadius:"10px"}}></div>
        </div>
    </div>

  );

}

const printMsg = () => {
  document.getElementById('show-time').innerHTML = '我被改變了';

}

root.render(
  //testBtn(),
  <div>
    <App>ghkjghk</App>
    {/* <App handleClick={printMsg} /> */}
    {/* <App2 /> */}
    {/* <Progress2 /> */}
    {/* <div id='show-time'></div> */}
  </div>,
  //<Eww name="我的名字" bbb={4567457} getData={true} />
  // <React.StrictMode>
  //   <App />
    
  // </React.StrictMode>
);

// const aaa = (...args) => {
//   console.log(args);
//   console.log(...args);
// };

// aaa("sdgh", "dfghd", "3456", true);

const fff = ["sdgs", "wtwetwet", "66677hfgfh"];

const [a, b] = fff;

console.log(a);
console.log(b);

const hhh = {"apple": "ggg", "banana": "hhhh" };

const {apple: u, banana: k} = hhh;

console.log(u);
console.log(k);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
