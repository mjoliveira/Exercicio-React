import React from 'react';
import Router from './routes';
import { Link } from '@reach/router';

function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/pagina-2/3">Página 2</Link> 
      <br/>
      <Router />
    </>   
  )
}

export default App;
