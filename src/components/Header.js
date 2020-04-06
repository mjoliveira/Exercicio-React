import React, { useCallback } from 'react';
import { Link, navigate} from '@reach/router';
import { logout } from '../services/AuthenticationService';
import '../_assets/css/index.scss';

function Header() {

  const handleLogout = useCallback(
    evt => {
      logout();
      navigate("/login");
    },
    [],
  );

  return (
    <div className="header">
      <Link className="menu-link" to="/create">Criar dragão</Link>
      <Link className="menu-link" to="/">Lista de dragões</Link>
      <button className="menu-btn" type="button" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Header;
