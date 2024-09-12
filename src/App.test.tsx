// This is an example test file for the App component.
// All test files should have <component_name>.test.tsx as the file name.
// This file is written using the vitest testing library.
// The test file should test the component's functionality and not the implementation details.
// The test file should be placed in the same directory as the component file.

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
