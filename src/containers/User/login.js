import React, { useCallback } from 'react';
import { navigate } from '@reach/router';
import "./login.css";
import "../../resources/assets/css/layout.css";

function Login() {
  const handleLogin = useCallback(
    evt => {
      navigate("/");
    },
    [],
  )
  return (
    <form>
      <table className="table-login">
        <thead>
          <tr>
            <th colSpan="2"><h2 className="subtitle" >Login!</h2></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th><label className="lable-login" htmlFor="user">Usuário</label></th>
            <th><input id="user" type="text" autocomplite="off" /></th>
          </tr>
          <tr>
            <th><label className="lable-login" htmlFor="password">Senha</label></th>
            <th><input id="password" type="password" autocomplite="off" /></th>
          </tr>
          <tr>
            <th colSpan="2">
              <button className="btn btn-login" type="button" onClick={handleLogin}>Entrar</button>
            </th>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default Login;