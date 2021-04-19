import { TextField, Button } from '@material-ui/core';

const Form = () => {
  return (
    <form>
      <TextField variant='outlined' placeholder='チャットを入力...' />
      <Button variant='contained' color='secondary'>
        送信
      </Button>
    </form>
  );
};

export default Form;
