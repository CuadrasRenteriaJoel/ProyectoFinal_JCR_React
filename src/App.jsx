import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Section from './componentes/Section';
import Footer from './componentes/Footer';
import ContactForm from './componentes/ContactForm';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <main className="main">
        <div className="content">
          <Routes>
          <Route path="/" element={
                <div className="sections-container">
                  <Section
                    title="PLANETA BUYAN"
                    content="Buyan es un lugar misterioso, con su propio ecosistema y cultura. Es hogar de los mayores avances tecnológicos del sistema AEON."
                    images={[
                      'https://signalis.wiki.gg/images/7/77/PosterBuyan.png',
                    ]}
                  />
                  <Section
                    title="PLANETA ROTFRONT"
                    content="El cuarto cuerpo habitado del Sistema Solar, una luna colonizada por la Nación en la memoria viva y el foco de su expansión: la propaganda de la Nación se refiere a ella como la Esperanza para el futuro."
                    images={[
                      'https://signalis.wiki.gg/images/b/b4/PosterRotfront.png',
                    ]}
                  />
                  <Section
                    title="PLANETA VINETA"
                    content="El segundo planeta habitado del Sistema Solar y la 'Cuna de la Humanidad'. Un mundo oceánico bajo el control de la Nación Eusan desde la Guerra Vinetana, que ahora actúa como primera línea en la guerra contra el Imperio."
                    images={[
                      'https://signalis.wiki.gg/images/4/41/PosterVineta.png',
                    ]}
                  />
                </div>
              }
            />

            
            <Route path="/Replikas" element={
                <div className="sections-container">
                  <Section
                    title="ELSTER"
                    content="Una Replika es un humanoide biomecánico creado por AEON. 
                    Las Replikas se pueden clasificar por su designación de unidad, que describe su estructura, patrones neuronales y funciones óptimas."
                    images={[
                      'https://signalis-wiki-gg.translate.goog/images/thumb/e/e0/LSTR.png/300px-LSTR.png?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc',
                    ]}
                  />
                  <Section
                    title="FALKE"
                    content="FKLR (Führungskommando-Leiteinheit-Replika), (Unidad de Control de Mando Operativo Replika 'Falcon') o Falke , son Replikas de mando por biorresonancia de alta tecnología de sexta generación . Estas Replikas se utilizan en todas las instalaciones de AEON en toda la nación Eusan como comandante de las fuerzas de seguridad Protektor. Falke significa Halcón en alemán. "
                    images={[
                      'https://signalis-wiki-gg.translate.goog/images/thumb/f/fe/FKLR.png/300px-FKLR.png?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc',
                    ]}
                  />
                  <Section
                    title="STAR"
                    content="STAR (Sicherheitstechniker-Aufseher-Replika), (Replica de guardia técnico de seguridad 'Starling') o Star , son réplicas de combate de bajo costo de la Generación 4. Estas unidades son guardias técnicos de seguridad Protektor"
                    images={[
                      'https://signalis-wiki-gg.translate.goog/images/thumb/9/99/STAR.png/300px-STAR.png?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc',
                    ]}
                  />
                </div>
              }
            />

            
            <Route path="/Formulario" element={<ContactForm />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
