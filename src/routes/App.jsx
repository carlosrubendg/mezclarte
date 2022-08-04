import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import LosRollingStones from '../pages/concursos/LosRollingStones';
import Madonna from '../pages/concursos/Madonna';
import ErranteEcologico from '../pages/colectivos/ErranteEcologico';
import VaquerosDelFuturo from '../pages/colectivos/VaquerosDelFuturo';
import ArtesPlasticas from '../pages/colectivos/ArtesPlasticas';
import { ConvocatoriaMezclarte2022 } from '../pages/ConvocatoriaMezclarte2022';
import { Shop } from '../pages/Shop';
import { Error404 } from '../pages/Error404';
import '../styles/_global.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concursos/los-rolling-stones" element={<LosRollingStones />} />
          <Route path="/concursos/madonna" element={<Madonna />} />
          <Route path="/colectivos/errante-ecologico" element={<ErranteEcologico />} />
          <Route path="/colectivos/vaqueros-del-futuro" element={<VaquerosDelFuturo />} />
          <Route path="/colectivos/artes-plasticas" element={<ArtesPlasticas />} />
          <Route path="/convocatoria-mezclarte-2022" element={<ConvocatoriaMezclarte2022 />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;