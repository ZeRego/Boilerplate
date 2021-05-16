import React, { FC } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Box,
  List,
  Divider,
  makeStyles,
  createStyles,
} from '@material-ui/core';
import TodoCreateForm from './TodoCreateForm';
import TodoListItem from './TodoListItem';
import { ActionType, useApp } from '../../AppContext';

const useStyles = makeStyles(() =>
  createStyles({
    list: {
      paddingTop: 0,
    },
    actions: {
      justifyContent: 'flex-end',
    },
  }),
);

const Todos: FC = () => {
  const classes = useStyles();
  const { state, dispatch } = useApp();
  return (
    <Box>
      <Card>
        <CardContent>
          <TodoCreateForm />
        </CardContent>
        {state.items.length > 0 && (
          <>
            <CardContent className={classes.list}>
              <Divider />
              <List>
                {state.items.map((item) => (
                  <TodoListItem key={item.id} item={item} />
                ))}
              </List>
            </CardContent>
            <CardActions>
              <Button
                color="secondary"
                size="small"
                onClick={() =>
                  dispatch({ type: ActionType.REMOVE_CHECKED_ITEMS })
                }
              >
                Clear checked items
              </Button>
            </CardActions>
          </>
        )}
      </Card>
    </Box>
  );
};

export default Todos;
