import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RoutesComponent from './components/RoutesComponent';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen flex flex-col justify-between">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <div className="mb-auto">
          <RoutesComponent />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
