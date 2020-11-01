import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthService';
import { auth, db } from '../firebase';

import List from '../components/List';
import Form from '../components/Form';

const Room = () => {
  const [messages, setMessages] = useState([]);
  const user = useContext(AuthContext);

  const addMessage = (text) => {
    db.collection('messages').add({
      content: text,
      username: user.displayName,
      createdAt: new Date(),
    });
  };

  // useEffectのコールバック関数実行タイミング
  //  - 第二引数の依存配列の中の変数が変わるたびにコールバック関数を実行する
  //  - 画面が読み込まれた(描写された)あとの最初の一回実行される
  useEffect(() => {
    db.collection('messages')
      .orderBy('createdAt')
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log(data);
        setMessages(data);
      });

    // db.collection('messages')
    //   .get()
    //   .then((querySnapshot) => {
    //     // setMessages(querySnapshot.docs.map((doc) => doc.data()));
    //     const data = querySnapshot.docs.map((doc) => doc.data());
    //     console.log(data);
    //     setMessages(data);
    //   });
  }, []);
  // aタグはデフォルトの機能としてhref属性に指定されたurlに遷移する
  // form => action属性に指定されたURLに遷移 + データ送信
  // => そのデフォルトの機能をキャンセルする

  return (
    <div>
      <List messages={messages} />
      <Form addMessage={addMessage} />
      <button onClick={() => auth.signOut()}>logout</button>
    </div>
  );
};

export default Room;

// SQL noSQL
// callback : 関数の引数に関数をしていする
/*
const some = (fn) => {
  fn();
};

some(() => {});

const onClick = (fn) => {
  const e = 'イベントの情報';
  // クリックされた時
  fn(e);
};

onClick((e)=>{e.target.value})
*/
