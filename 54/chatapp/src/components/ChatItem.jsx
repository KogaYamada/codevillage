import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  card: {
    width: '400px',
    height: '120px',
    padding: '15px',
    margin: '20px 10px',
  },
});

const ChatItem = ({ username, body }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        title={username}
        action={<Button variant='contained'>削除</Button>}
      />
      <CardContent>
        <Typography>{body}</Typography>
      </CardContent>
    </Card>
  );
};

export default ChatItem;
