import * as React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { AppProvider } from './AppContext';

describe('<App>', () => {
  it('renders title', () => {
    render(
      <AppProvider>
        <App />
      </AppProvider>,
    );
    expect(screen.getByText(/todo list/i)).toBeVisible();
  });
});
