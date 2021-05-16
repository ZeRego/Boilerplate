import React, { FC } from 'react';
import {
  Container,
  createStyles,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Todos from './components/todos';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '500px',
    },
    title: {
      'text-align': 'center',
      color: '#fff',
      'font-size': '6em',
      'font-weight': 'bold',
      'text-shadow': `0 1px 0 #ccc,
        0 2px 0 #c9c9c9,
        0 3px 0 #bbb,
        0 4px 0 #b9b9b9,
        0 5px 0 #aaa,
        0 6px 1px rgba(0,0,0,.1),
        0 0 5px rgba(0,0,0,.1),
        0 1px 3px rgba(0,0,0,.3),
        0 3px 5px rgba(0,0,0,.2),
        0 5px 10px rgba(0,0,0,.25),
        0 10px 10px rgba(0,0,0,.2),
        0 20px 20px rgba(0,0,0,.15)`,
    },
  }),
);

const App: FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography gutterBottom variant="h6" className={classes.title}>
        Todo List
      </Typography>
      <Todos />
    </Container>
  );
};

export default App;
