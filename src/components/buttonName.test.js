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
    const onClick = () => {};

    render(<Button name="AC" className="grey" onClick={onClick} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/AC/)).toBeInTheDocument();
  });
});