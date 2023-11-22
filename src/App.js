
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Genre from './routes/Genre';
import Suggest from './routes/Suggest';
import Suggest2 from './routes/Suggest2';
import Login from './routes/Login';
import Register from './routes/Register';
import Movie from './routes/Movie';
import Lasted from './routes/Lasted';
import Ranking from './routes/Ranking';
import Loading from './routes/Loading';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Genre" element={<Genre />} />
          <Route path="/Suggest" element={<Suggest />} />
          <Route path="/Suggest2" element={<Suggest2 />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Movie/:id" element={<Movie/>} />
          <Route path="/Lasted" element={<Lasted/>} />
          <Route path="/Ranking" element={<Ranking/>} />
          <Route path="/Loading" element={<Loading/>} />
          
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
