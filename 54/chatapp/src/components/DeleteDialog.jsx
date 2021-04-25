import { Dialog, DialogActions, DialogTitle, Button } from '@material-ui/core';

const DeleteDialog = ({ open, onOk, onCancel }) => {
  return (
    <Dialog open={open}>
      <DialogTitle>削除してもよろしいですか？</DialogTitle>
      <DialogActions>
        <Button onClick={onOk}>はい</Button>
        <Button onClick={onCancel}>いいえ</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
