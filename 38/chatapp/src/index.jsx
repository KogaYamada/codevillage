import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import App from './App';


// const App = () => {
//   console.log("描写されました");
//   // stateを使う場合
//   const [name, setName] = useState("koga");
//   const changeName = () => {
//     setName("こうが");
//   };

//   // stateを使わない場合
//   // let name = "koga";
//   // const changeName = () => {
//   //   name = "こうが";
//   //   console.log(name);
//   // };
//   return (
//     <>
//       <h1>お名前:{ name }</h1>
//       <button onClick={ changeName }>名前変更ボタン</button>
//     </>
//   );
// }

ReactDOM.render(<App />, document.getElementById('root'));