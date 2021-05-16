import React, { FC } from 'react';
import {
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { ActionType, useApp } from '../../AppContext';

const TodoListItem: FC<{ item: TodoItem }> = ({
  item: { id, checked, detail },
}) => {
  const { dispatch } = useApp();
  return (
    <ListItem
      dense
      button
      onClick={() => dispatch({ type: ActionType.TOGGLE_ITEM, payload: id })}
    >
      <ListItemIcon>
        <Checkbox
          color="primary"
          edge="start"
          checked={checked}
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': id }}
        />
      </ListItemIcon>
      <ListItemText id={id} primary={detail} />
    </ListItem>
  );
};

export default TodoListItem;
