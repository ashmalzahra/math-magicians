import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from './Layout';

describe('Checking page deployment', () => {
  test('Layout component matches snapshot', () => {
    const tree = renderer.create(<Router><Layout /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders Layout component', () => {
    render(<Router><Layout /></Router>);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText(/Calculator/)).toBeInTheDocument();
  });
});
