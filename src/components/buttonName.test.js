import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './buttonName';

describe('Checking page deployment', () => {
  test('Button component matches snapshot', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders Button component', () => {
    render(<Button />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText(/Welcome to our page!/)).toBeInTheDocument();
  });
});