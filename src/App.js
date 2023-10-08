import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Ranking from './routes/Ranking';
import Suggest from './routes/Suggest';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Ranking" element={<Ranking />} />
          <Route path="/Suggest" element={<Suggest />} />
          
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
