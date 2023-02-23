import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import '@testing-library/jest-dom';

describe('Checking page deployment', () => {
  test('Home component matches snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders Home component', () => {
    render(<Home />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText(/Welcome to our page!/)).toBeInTheDocument();
  });
});
