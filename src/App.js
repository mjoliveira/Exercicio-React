import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './_config/routes';

function App() {

  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  )
}

export default App;
