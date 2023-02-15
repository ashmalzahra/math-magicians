const Calculator = () => (
  <div id="container">
    <table>
      <tr className="display-values">
        <th>0</th>
      </tr>
      <tr className="row">
        <td><button className="grey" type="button">AC</button></td>
        <td><button className="grey" type="button">+/-</button></td>
        <td><button className="grey" type="button">%</button></td>
        <td><button className="orange" type="button">÷</button></td>
      </tr>
      <tr className="row">
        <td><button className="grey" type="button">7</button></td>
        <td><button className="grey" type="button">8</button></td>
        <td><button className="grey" type="button">9</button></td>
        <td><button className="orange" type="button">*</button></td>
      </tr>
      <tr className="row">
        <td><button className="grey" type="button">4</button></td>
        <td><button className="grey" type="button">5</button></td>
        <td><button className="grey" type="button">6</button></td>
        <td><button className="orange" type="button">-</button></td>
      </tr>
      <tr className="row">
        <td><button className="grey" type="button">1</button></td>
        <td><button className="grey" type="button">2</button></td>
        <td><button className="grey" type="button">3</button></td>
        <td><button className="orange" type="button">+</button></td>
      </tr>
      <tr className="row">
        <td colSpan={2}><button id="last" className="grey" type="button">0</button></td>
        <td><button className="grey" type="button">.</button></td>
        <td><button className="orange" type="button">=</button></td>
      </tr>
    </table>
  </div>
);

export default Calculator;
