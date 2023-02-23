import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import NotMatch from './NotMatch';
import '@testing-library/jest-dom';

describe('Checking page deployment', () => {
  test('NotMatch component matches snapshot', () => {
    const tree = renderer.create(<NotMatch />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders NotMatch component', () => {
    render(<NotMatch />);

    expect(screen.getByText(/Page not found/)).toBeInTheDocument();
  });
});
