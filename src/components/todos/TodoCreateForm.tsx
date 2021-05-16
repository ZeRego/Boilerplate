import React, { FC, FormEvent, useState } from 'react';
import {
  IconButton,
  InputBase,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core';
import { Send } from '@material-ui/icons';
import { ActionType, useApp } from '../../AppContext';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    addInput: {
      flex: 1,
      padding: theme.spacing(1, 1, 1, 2),
    },
  }),
);

const TodoCreateForm: FC = () => {
  const classes = useStyles();
  const { dispatch } = useApp();
  const [newItemDetail, setNewItemDetail] = useState<string>();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newItemDetail) {
      dispatch({
        type: ActionType.ADD_ITEM,
        payload: { id: uuidv4(), detail: newItemDetail, checked: false },
      });
      setNewItemDetail('');
    }
  };

  return (
    <form onSubmit={onSubmit} className={classes.root}>
      <InputBase
        required={true}
        placeholder="Type new todo item"
        value={newItemDetail}
        onChange={(e) => setNewItemDetail(e.target.value)}
        className={classes.addInput}
      />
      <IconButton
        aria-label="add task"
        type={'submit'}
        color="primary"
        onClick={onSubmit}
      >
        <Send />
      </IconButton>
    </form>
  );
};

export default TodoCreateForm;
