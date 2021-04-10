import {
  TextField,
  Button,
  Card,
  CardHeader,
  CardContent,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    backgroundColor: '#E2e2e2',
    minHeight: '100vh',
  },
  card: {
    width: '400px',
    height: '120px',
    padding: '15px',
    margin: '20px 10px',
  },
});

const Room = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>チャットルーム</h1>
      <form>
        <TextField variant='outlined' placeholder='チャットを入力...' />
        <Button variant='contained' color='secondary'>
          送信
        </Button>
      </form>
      <div>
        <Card className={classes.card}>
          <CardHeader
            title='こうが１号'
            action={<Button variant='contained'>削除</Button>}
          />
          <CardContent>こんにちは</CardContent>
        </Card>
        <Card className={classes.card}>
          <CardHeader
            title='こうが2号'
            action={<Button variant='contained'>削除</Button>}
          />
          <CardContent>
            <Typography>こんばんは</Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Room;
