import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todos from './index';
import { AppProvider } from '../../AppContext';

describe('<Todos>', () => {
  beforeEach(() => {
    render(
      <AppProvider>
        <Todos />
      </AppProvider>,
    );
  });
  it('should create and clear checked tasks', async () => {
    userEvent.type(
      screen.getByPlaceholderText('Type new todo item'),
      'buy milk',
    );
    userEvent.click(screen.getByRole('button'));
    userEvent.click(screen.getByText('buy milk'));
    userEvent.click(screen.getByText('Clear checked items'));
  });
  it('should not create task with empty value', async () => {
    userEvent.click(screen.getByRole('button'));
    expect(screen.queryByText('Clear checked items')).not.toBeInTheDocument();
  });
});
