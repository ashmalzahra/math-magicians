import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Calculator from './Calculator';
import '@testing-library/jest-dom';

describe('Checking calculator deployment', () => {
  test('Calculator renders and matches snapshot', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders Calculator component', () => {
    render(<Calculator />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText(/Let's do some math!/)).toBeInTheDocument();
  });
});
