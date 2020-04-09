import React, { useCallback } from 'react';
import { Link, navigate} from '@reach/router';
import { logout } from '../services/AuthenticationService';
import Logo from "../_assets/icons/dragon-white.png";
import '../_assets/css/header.scss';

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
      <img className="logo" src={Logo} alt="Dragon App"/>
      <Link className="menu-link" to="/create">Criar dragão</Link>
      <Link className="menu-link" to="/">Lista de dragões</Link>
      <span className="menu-link" onClick={handleLogout}>Logout</span>
    </div>
  )
}

export default Header;
