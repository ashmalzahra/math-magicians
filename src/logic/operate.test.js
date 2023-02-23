import operate from './operate';

describe('testing operate with component', () => {
  test('test if total is correct when `+`', () => {
    const numberOne = '7';
    const numberTwo = '6';
    const operation = '+';

    const result = operate(numberOne, numberTwo, operation);

    expect(result).toEqual('13');
  });

  test('test if total is correct when `-`', () => {
    const numberOne = '7';
    const numberTwo = '6';
    const operation = '-';

    const result = operate(numberOne, numberTwo, operation);

    expect(result).toEqual('1');
  });

  test('test if total is correct when `x`', () => {
    const numberOne = '7';
    const numberTwo = '6';
    const operation = 'x';

    const result = operate(numberOne, numberTwo, operation);

    expect(result).toEqual('42');
  });

  test('test if total is correct when `÷`', () => {
    const numberOne = '6';
    const numberTwo = '2';
    const operation = '÷';

    const result = operate(numberOne, numberTwo, operation);

    expect(result).toEqual('3');
  });
});