import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Social from './components/Social';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'js/smoothscroll.js';
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'js/custom.js';
    document.body.appendChild(script2);
  }, []);

  return (
    <>
      <Header />
      <Home />
      <Portfolio />
      <Resume />
      <Social />
      <Footer />
    </>
  );
}

export default App;
