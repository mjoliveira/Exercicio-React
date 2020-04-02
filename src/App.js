import React, { useCallback } from 'react';
import Router from './_config/routes';
import { Link, navigate } from '@reach/router';
import { logout } from './services/AuthenticationService';

function App() {

  const handleLogout = useCallback(
    evt => {
      logout();
      navigate("/login");
    },
    [],
  );

  return (
    <>
      <button type="button" onClick={handleLogout}>Logout</button>
      <br />
      <Link to="/">Lista de dragões</Link>
      <br />
      <Link to="/create">Criar dragão</Link>
      <br />
      <Link to="/login">Login</Link>
      <Router />
    </>
  )
}

export default App;
