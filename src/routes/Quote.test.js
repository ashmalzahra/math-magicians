import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Quote from './Quote';
import '@testing-library/jest-dom';

describe('Checking page deployment', () => {
  test('Quote component matches snapshot', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders Quote component', () => {
    render(<Quote />);

    expect(screen.getByText(/Mathematics is not about numbers,/)).toBeInTheDocument();
  });
});
