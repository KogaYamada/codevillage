import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: '0 auto',
    width: '350px',
    height: '370px',
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
      <TextField fullWidth label='メールアドレス' variant='outlined' />
      <TextField fullWidth label='パスワード' variant='filled' />
      <TextField fullWidth label='ユーザーネーム' variant='standard' />

      <Button variant='contained' color='primary'>
        登録
      </Button>
      <p>アカウントを既にお持ちの方</p>
    </form>
  );
};

export default Signup;
