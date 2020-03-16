import React from 'react';
import Router from './routes';
import { Link } from '@reach/router';

function App() {
  return (
    <>
      <Link to="/">Lista de dragões</Link>
      <br/>
      <Link to="/create">Criar dragão</Link>
      <br/>
      <Link to="/login">Login</Link>
      <br/>
      <Router />
    </>
  )
}

export default App;
