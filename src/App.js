import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Greeting from './components/greeting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
