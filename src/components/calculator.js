import { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './buttonName';

const Calculator = () => {
  const [calculatorObj, setCalculatorObj] = useState({});

  function handleClick(e) {
    const { name } = e.target;
    setCalculatorObj(calculate(calculatorObj, name));
  }

  let result;

  if (calculatorObj.next) {
    result = calculatorObj.next;
  } else if (calculatorObj.total) {
    result = calculatorObj.total;
  } else {
    result = 0;
  }

  return (
    <div id="container">
      <table>
        <tbody>
          <tr className="display-values">
            <th>{result}</th>
          </tr>
          <tr className="row">
            <td>
              <Button onClick={(e) => { handleClick(e); }} name="AC" className="grey" />
              {' '}
            </td>
            <td><Button onClick={(e) => { handleClick(e); }} name="+/-" className="grey" /></td>
            <td><Button onClick={(e) => { handleClick(e); }} name="%" className="grey" /></td>
            <td><Button onClick={(e) => { handleClick(e); }} name="÷" className="orange" /></td>
          </tr>
          <tr className="row">
            <td><Button onClick={(e) => { handleClick(e); }} name="7" className="grey" /></td>
            <td><Button onClick={(e) => { handleClick(e); }} name="8" className="grey" /></td>
            <td><Button onClick={(e) => { handleClick(e); }} name="9" className="grey" /></td>
            <td><Button onClick={(e) => { handleClick(e); }} name="x" className="orange" /></td>
          </tr>
          <tr className="row">
            <td><Button onClick={(e) => { handleClick(e); }} name="4" className="grey" /></td>
            <td><Button onClick={(e) => { handleClick(e); }} name="5" className="grey" /></td>
            <td><Button onClick={(e) => { handleClick(e); }} name="6" className="grey" /></td>
            <td><Button onClick={(e) => { handleClick(e); }} name="-" className="orange" /></td>
          </tr>
          <tr className="row">
            <td><Button onClick={(e) => { handleClick(e); }} name="1" className="grey" /></td>
            <td><Button onClick={(e) => { handleClick(e); }} name="2" className="grey" /></td>
            <td><Button onClick={(e) => { handleClick(e); }} name="3" className="grey" /></td>
            <td><Button onClick={(e) => { handleClick(e); }} name="+" className="orange" /></td>
          </tr>
          <tr className="row">
            <td colSpan={2}>
              <Button onClick={(e) => { handleClick(e); }} name="0" className="grey" id="last" />
            </td>
            <td><Button onClick={(e) => { handleClick(e); }} name="." className="grey" /></td>
            <td><Button onClick={(e) => { handleClick(e); }} name="=" className="orange" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;
