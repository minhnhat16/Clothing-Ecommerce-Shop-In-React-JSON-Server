import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

test('renders the App component without crashing', () => {
  render(
    <BrowserRouter>
    <h1> hello </h1>
    </BrowserRouter>
  );
});

