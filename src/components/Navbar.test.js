import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar';

describe('Checking page deployment', () => {
  test('Navbar component matches snapshot', () => {
    const tree = renderer.create(<Router><Navbar /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders Navbar component', () => {
    render(<Router><Navbar /></Router>);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText(/Home/)).toBeInTheDocument();
  });
});
