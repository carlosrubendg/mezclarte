import React from 'react'
import Aside from './Aside'
import '../styles/HomeContent.css'
import Concurso2017N35 from '../assets/concursos/concurso2017/Mezclarte_2017_35.jpeg'
import Concurso2014N43 from '../assets/concursos/concurso2014/Mezclarte_2014_43.jpeg'
import Colectivo2020N01 from '../assets/colectivos/colectivo2020/Colectivo_2020_01.jpeg'
import Colectivo2019N19 from '../assets/colectivos/colectivo2019/Colectivo_2019_19.jpeg'
import Colectivo2015N38 from '../assets/colectivos/colectivo2015/Colectivo_2015_38.jpeg'


const HomeContent = () => {
  return (
    <div className="HomeContent">
      <div className="HomeContent__content">
        <main className="HomeContent__main">
          <div className="HomeContent__info">
            <h2 id="Mezclarte">Mezclarte</h2>
            <p>
              Es un concurso de diseño en mezclilla. Surge en 2005, bajo la iniciativa de Rubén Díaz, director general de FN Fashion News. El objetivo, a lo largo de sus 15 años de vida, ha sido descubrir y proyectar nuevos diseñadores creadores de prendas en mezclilla.
            </p>
            <p>
              Desde sus inicios ha tenido una excelente respuesta ya que la mezclilla es un desarrollo textil con características tan particulares que impone moda y que, además, gusta a los jóvenes en general. Los ganadores de esta gran competencia, han viajado a Cartagena de Indias, Colombia al Congreso Latinoamericano de Moda Ixel.
            </p>
            <p>
              A lo largo de 15 años se ha posicionado como uno de los concursos más importantes de México. La participación de jóvenes diseñadores emergentes y su organización lo han llevado a lograr la importancia que tiene.
            </p>
          </div>
          <div className="HomeContent__concursos">
            <h2>Concursos Mezclarte</h2>
            <p>
              Las ediciones anteriores han tenido mucho éxito. Aquí presentamos a los ganadores de algunos concursos.
            </p>
            <div className="HomeContent__gallery">
              <div className="HomeContent__cardConcursos">
                <a href="/concursos/los-rolling-stones">
                  <div className="HomeContent__cardConcursosImg">
                    <img src={Concurso2017N35} alt="Ganador Mezclarte 2017 - Los Rolling Stones" />
                  </div>
                  <div className="HomeContent__cardConcursosInfo">
                    <h3>Los Rolling Stones</h3>
                    <h4>Mezclarte 2017</h4>
                    <p>
                      Basados en Los Rolling Stones. Los concursantes crearon un diseño moderno inspirado en alguna canción del mencionado grupo inglés, acorde a las necesidades de moda urbana de la época actual.
                    </p>
                  </div>
                </a>
              </div>
              <div className="HomeContent__cardConcursos">
                <a href="/concursos/madonna">
                  <div className="HomeContent__cardConcursosImg">
                    <img src={Concurso2014N43} alt="Ganador Mezclarte 2014 - Madonna" />
                  </div>
                  <div className="HomeContent__cardConcursosInfo">
                    <h3>Madonna</h3>
                    <h4>Mezclarte 2014</h4>
                    <p>
                      El tema fue basado en Madonna, mujer perfeccionista, sensual, desinhibida y polémica. Los concursantes crearon diseños basados en sus conciertos a lo largo de sus 33 años de carrera y en las creaciones que los grandes diseñadores hicieron para ella.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="HomeContent__colectivos">
            <h2>Colectivos Mezclarte</h2>
            <div className="HomeContent__gallery">
              <div className="HomeContent__cardColectivos">
                <a href="/colectivos/errante-ecologico">
                  <div className="HomeContent__cardColectivosImg">
                    <img src={Colectivo2020N01} alt="Colectivo Mezclarte 2020 - Errante Ecológico" />
                  </div>
                  <div className="HomeContent__cardColectivosInfo">
                    <h3>Errante ecológico</h3>
                    <h4>Colectivo 2020</h4>
                    <p>Por: Felva Mosso Tecnológico de la Moda.</p>
                  </div>
                </a>
              </div>
              <div className="HomeContent__cardColectivos">
                <a href="/colectivos/vaqueros-del-futuro">
                  <div className="HomeContent__cardColectivosImg">
                    <img src={Colectivo2019N19} alt="Colectivo Mezclarte 2019 - Vaqueros del Futuro" />
                  </div>
                  <div className="HomeContent__cardColectivosInfo">
                    <h3>Vaqueros del futuro</h3>
                    <h4>Colectivo 2019</h4>
                    <p>Por: Universidad CAM.</p>
                  </div>
                </a>
              </div>
              <div className="HomeContent__cardColectivos">
                <a href="/colectivos/artes-plasticas">
                  <div className="HomeContent__cardColectivosImg">
                    <img src={Colectivo2015N38} alt="Colectivo Mezclarte 2015 - Tributo a los Grandes de las Artes Plásticas" />
                  </div>
                  <div className="HomeContent__cardColectivosInfo">
                    <h3>Artes Plásticas</h3>
                    <h4>Colectivo 2015</h4>
                    <p>Por: Universidad CAM, CIME, UDG y Gestalt Veracruz.</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <Aside />
      </div>
    </div>
  )
}

export default HomeContent