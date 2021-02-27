import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '400px',
    height: '450px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

const Signup = () => {
  const classes = useStyles();
  return (
    <form className={classes.root}>
      <h1>ユーザー登録ページ</h1>
      <TextField fullWidth type='text' label='ユーザー名' variant='standard' />
      <TextField
        fullWidth
        type='email'
        label='メールアドレス'
        variant='filled'
      />
      <TextField
        fullWidth
        type='password'
        label='パスワード'
        variant='outlined'
      />
      <Button fullWidth color='primary' variant='contained'>
        登録
      </Button>
      <p>アカウントをお持ちの方</p>
    </form>
  );
};

export default Signup;
