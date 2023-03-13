import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from './calculator';

describe('Checking page deployment', () => {
  test('Calculator component matches snapshot', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders Calculator component', () => {
    render(<Calculator />);

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByText(/AC/)).toBeInTheDocument();
  });
});
