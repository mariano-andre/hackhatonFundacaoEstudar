import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Tabelas from './pages/Tabelas/Tabelas';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tabelas" element={<Tabelas />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
