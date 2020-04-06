import React, { useCallback } from 'react';
import { Link, navigate} from '@reach/router';
import { logout } from '../services/AuthenticationService';
import '../_assets/css/components/header.scss'

function Header() {

  const handleLogout = useCallback(
    evt => {
      logout();
      navigate("/login");
    },
    [],
  );

  return (
    <>
      <Link to="/create">Criar dragão</Link>
      <Link to="/">Lista de dragões</Link>
      <button type="button" onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Header;
