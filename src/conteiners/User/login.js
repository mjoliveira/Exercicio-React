import React, { useCallback } from 'react';
import { navigate } from '@reach/router';

function Login() {
  const handleLogin = useCallback(
    evt => {
      navigate("/dragon");
    },
    [],
  )
  return (
    <form>
      <p>Login!</p>
      <label htmlFor="user">Usuário </label>
      <input id="user" type="text" autocomplite="off" />
      <br />
      <label htmlFor="password">Senha </label>
      <input id="password" type="password" autocomplite="off" />
      <br />
      <button type="button" onClick={handleLogin}>Entrar</button>
    </form>
  );
}

export default Login;