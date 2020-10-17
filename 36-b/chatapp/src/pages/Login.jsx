import React, {useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { Link, useHistory, Redirect } from 'react-router-dom';
import {auth} from "../config/firebase"
import {AuthContext} from "../context/AuthService"

const useStyles = makeStyles({
  title: {
    color: '#000',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '350px',
    height: '350px',
    margin: '0 auto',
  },
});

// signupページで作成したユーザーでログインする

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const classes = useStyles();
	const history = useHistory()
	const user = useContext(AuthContext)

	const handleSubmit = (e) => {
		e.preventDefault()
		auth.signInWithEmailAndPassword(email, password)
			.then(()=>{
				history.push("/")
			}).catch((error)=>{
				console.error("ログイン失敗", error)
			})
	}

	if(user) {
	  return	<Redirect to="/" />
	}
	
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <h1 className={classes.title}>ログインページ</h1>
      <TextField
				type="email"
				label="メールアドレス"
				variant="outlined"
				value={email}
				onChange={(e)=> setEmail(e.target.value)}
			/>
      <TextField
				type="password"
				label="パスワード"
				variant="outlined"
				value={password}
				onChange={(e)=> setPassword(e.target.value)}
			/>
      <Button type="submit" variant="contained" color="secondary">
        ログイン
      </Button>
      <Link to="/signup">アカウントをお持ちでない方</Link>
    </form>
  );
};

export default Login;
