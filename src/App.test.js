import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders Hello, World! heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/hello, world!/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders a button with text Click me', () => {
  render(<App />);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});

test('changes message on button click', () => {
  render(<App />);
  const buttonElement = screen.getByText(/click me/i);
  fireEvent.click(buttonElement);
  const newMessageElement = screen.getByText(/button clicked!/i);
  expect(newMessageElement).toBeInTheDocument();
});
