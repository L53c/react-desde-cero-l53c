import React from 'react';
import './styles/styles.scss';
import Curso from './Curso';

const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" src="https://newevolutiondesigns.com/images/freebies/city-wallpaper-preview-24.jpg" alt="imagen" />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Cursos de EDTeam</p>
            <p> Tu futuro te está esperando</p>
            <a href="https://ux.ed.team/" className="button accent-color">Suscribirse</a>
          </div>
        </div>
      </div>
    </div>

    <div className="ed-grid m-grid-3">
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
    </div>
  </>
)

export default App;
