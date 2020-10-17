import React, {useContext} from 'react';
import {auth} from "../config/firebase"
import {useHistory} from "react-router-dom"
import {AuthContext}from "../context/AuthService"

const Room = () => {
	const history = useHistory()
	const user = useContext(AuthContext)
	const logout = () => {
		auth.signOut()
		history.push("/login")
	}
  return (
	<>
		<h1>Room</h1>
		<button onClick={logout}>ログアウト</button>
	</>
	);
};

export default Room;
