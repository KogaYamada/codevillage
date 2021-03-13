import { Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '350px',
    height: '370px',
    margin: '50px auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '32px',
    color: 'red',
  },
});

const Signup = () => {
  const classes = useStyles();
  return (
    <form className={classes.root}>
      <Typography variant='h1' className={classes.title}>
        ユーザー登録ページ
      </Typography>
      <TextField fullWidth variant='filled' label='メールアドレス' />
      <TextField fullWidth variant='outlined' label='パスワード' />
      <TextField fullWidth variant='standard' label='ユーザー名' />
      <Button fullWidth variant='contained' color='primary'>
        新規登録
      </Button>
    </form>
  );
};

export default Signup;
