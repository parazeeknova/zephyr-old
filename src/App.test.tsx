import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders the Zephyr heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/Zephyr/i);
    expect(headingElement).toBeInTheDocument();
  });
});
