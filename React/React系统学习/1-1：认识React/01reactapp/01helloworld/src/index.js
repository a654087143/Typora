import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Clock from './reactapp/01time/time.js'
//import * as serviceWorker from './serviceWorker';

/** 
 * 普通写法
 */ 
// function clock(){
//   let now = new Date().toLocaleTimeString();
//   let ele = (<div>
//       <h1>现在的时间是{now}</h1>
//       </div>);
//   let root = document.querySelector("#root");
//   ReactDOM.render(ele,root);
// }

// clock()

// setInterval(clock,1000);

/**
 * 函数式组件写法
 */
// function Clock(props) {
//   return(
//     <div>
//       <h1>现在的时间是{props.date.toLocaleTimeString()}</h1>
//     </div>
//   );
// }

// function run() {
//   ReactDOM.render(
//     <Clock date={new Date()}/>,document.querySelector('#root')
//   );
// }

// setInterval(run,1000)

//组件式组件写法
 function run() {
   ReactDOM.render(
     <Clock date={new Date()}/>,document.querySelector('#root')
   );
 }
//run()
setInterval(run,1000)



//格式二
// let app = <App/>;
// let root = document.getElementById('root');
// ReactDOM.render(clock,root);

//格式一
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
