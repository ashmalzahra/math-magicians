import Calculator from '../components/calculator';
import './styles/Calculator.css';

const Calc = () => (
  <div>
    <h3 className="calc-text">Let&apos;s do some math!</h3>
    <section className="App">
      <Calculator />
    </section>
  </div>
);

export default Calc;
