import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Calc from './routes/Calculator';
import Quote from './routes/Quote';
import NotMatch from './routes/NotMatch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Calc />} />
      <Route path="quote" element={<Quote />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>
  );
}

export default App;
