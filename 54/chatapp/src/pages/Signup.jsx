import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Signup = () => {
  return (
    <form>
      <TextField fullWidth label='ユーザーネーム' />
      <TextField fullWidth label='メールアドレス' />
      <TextField fullWidth label='パスワード' />
      <Button variant='contained'>ログイン</Button>
    </form>
  );
};

export default Signup;
