import React, { useContext, useState, useEffect } from 'react';
import { auth, db } from "../firebase";
import { AuthContext } from "../components/AuthService"

const Room = () => {
	const [messages, setMessages] = useState([])
	const user = useContext(AuthContext);
	
  const signOut = () => {
    auth.signOut();
	};

	useEffect(()=>{
		db.collection("messages").get()
			.then((querySnapshot)=>{
				setMessages(querySnapshot.docs.map((doc) => {
					return {...doc.data(), id: doc.id}
				}))
			})
	},[])

  return (
    <>
      <h1>チャットルーム</h1>
			<ul>
				{messages.map((message) => {
					return <li key={message.id}>メッセージ: {message.content} 投稿者: {message.user}</li>
				})}
			</ul>
      <button onClick={signOut}>ログアウト</button>
    </>
  );
};

export default Room;
// messagesコレクションを作成して、それを取得=> 一覧表示