// App.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import App from './App';

beforeAll(() => {
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(() => 'mockUserId'), // Adjust mock value as needed
      setItem: jest.fn(),
      removeItem: jest.fn(),
    },
    writable: true,
  });
});
// Mock the pages or loaders used in your routes with functions returning JSX
jest.mock('./pages', () => ({
  About: () => <div>About Page</div>,
  Cart: () => <div>Cart Page</div>,
  Contact: () => <div>Contact Page</div>,
  HomeLayout: () => <div>Home Layout</div>,
  Landing: () => <div>Landing Page</div>,
  Login: () => <div>Login Page</div>,
  Register: () => <div>Register Page</div>,
  Shop: () => <div>Shop Page</div>,
  SingleProduct: () => <div>Single Product Page</div>,
  Wishlist: () => <div>Wishlist Page</div>,
  Profile: () => <div>Profile Page</div>,
  Search: () => <div>Search Page</div>,
  ThankYou: () => <div>Thank You Page</div>,
  OrderHistory: () => <div>Order History Page</div>,
}));

describe('App Component', () => {
  it('renders App component with RouterProvider and ToastContainer', () => {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <HomeLayout />,
        children: [
          {
            index: true,
            element: <Landing />,
            loader: jest.fn(),
          },
          // Add other routes as necessary
        ],
      },
    ]);

    render(
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    );

    // Assert that the Home Layout is rendered (or any other specific page that is default)
    expect(screen.getByText('Home Layout')).toBeInTheDocument();

    // Example: Test if the Landing Page is rendered for the index route
    expect(screen.getByText('Landing Page')).toBeInTheDocument();

    // Example: Test if the ToastContainer is rendered
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});
