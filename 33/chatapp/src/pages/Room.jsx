import React, { useContext } from 'react';
import {AuthContext} from "../context/AuthService"
import {auth} from "../firebase"

const Room = () => {
	const some = useContext(AuthContext)
  return <div><button onClick={()=> auth.signOut()}>logout</button></div>;
};

export default Room;
