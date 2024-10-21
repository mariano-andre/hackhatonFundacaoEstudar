import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Tabelas from './pages/Tabelas/Tabelas';
import NossaAPI from './pages/API/NossaAPI';
import Receitas from './pages/Receitas/Receitas';
import Utilidades from './pages/Utilidades/Utilidades';

function routes() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tabelas" element={<Tabelas />}/>
          <Route path="/API" element={<NossaAPI />}/>
          <Route path="/Receitas" element={<Receitas />}/>
          <Route path="/Utilidades" element={<Utilidades />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default routes;
