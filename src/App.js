import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './container/home';
import About from './container/about';
import Resume from './container/resume';
import Skills from './container/skills';
import Portfolio from './container/portfolio';
import Contact from './container/contact';
import Navbar from './component/navBar';
import particles from './utils.js/particles';

function App() {

  const location = useLocation();
  console.log(location);

  const handleInit = async (main) => {
    await loadFull(main);

  };

  const renderParticlesJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* particles js */}

      {
        renderParticlesJsInHomePage && (

          <Particles id='particles' options={particles} init={handleInit} />

        )}

      {/* navbar */}

      <Navbar />

      {/* main page content */}

      <div className='App__main-page-content'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='resume' element={<Resume />} />
          <Route path='skills' element={<Skills />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </div>




    </div>
  );
}

export default App;
