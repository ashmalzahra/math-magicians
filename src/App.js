import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Calc from './routes/Calculator';
import Quote from './routes/Quote';
import NotMatch from './routes/NotMatch';
import Layout from './routes/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="calculator" element={<Calc />} />
        <Route path="quote" element={<Quote />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
