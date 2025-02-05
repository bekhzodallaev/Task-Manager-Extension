import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

describe('Dashboard Component', () => {
  test('Modal should not be visible initially', () => {
    render(
      <BrowserRouter>
        {' '}
        {/* Wrap your component with BrowserRouter */}
        <Dashboard />
      </BrowserRouter>
    );
    const modal = screen.queryByRole('dialog');
    expect(modal).not.toBeInTheDocument();
  });

  test("Clicking 'Add Task' button opens the modal", () => {
    render(
      <BrowserRouter>
        {' '}
        {/* Wrap your component with BrowserRouter */}
        <Dashboard />
      </BrowserRouter>
    );

    const addButton = screen.getByText(/Add new task/i);
    fireEvent.click(addButton);

    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();
  });

  test("Clicking 'Close' button closes the modal", () => {
    render(
      <BrowserRouter>
        {' '}
        {/* Wrap your component with BrowserRouter */}
        <Dashboard />
      </BrowserRouter>
    );

    const addButton = screen.getByText(/add new task/i);
    fireEvent.click(addButton);

    const closeButton = screen.getByText('X');
    fireEvent.click(closeButton);

    const modal = screen.queryByRole('dialog');
    expect(modal).not.toBeInTheDocument();
  });
});
