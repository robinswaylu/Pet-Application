import React from 'react';
// imported react-router for app routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Navbar, Footer } from './components';
// use style.js constant to make the tailwind class cleaner and easier to scale in future
import styles from './styles';

const App = () => {
  return (
    <div className="bg-ripl-gradient w-full overflow-hidden">
      <div className="ripl-image" />

      <BrowserRouter>
        {/* Start Navbar div */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        {/* End Navbar div */}

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        {/* Start Footer div */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
        {/* End Footer div */}
      </BrowserRouter>
    </div>
  );
};

export default App;
