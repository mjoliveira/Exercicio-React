import React from 'react';
import { LoginService } from '../../services/LoginServece';
import Header from '../../components/Header';
//import "./login.scss";
//import "../../_assets/scss/layout.scss";

function Login() {

  const handleSubmit = (e) => {
    try {
      const user = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
      };
      const correct = LoginService(user);

      if (correct) {
        window.location = "/"
      }

      e.preventDefault();

    } catch (err) {
      console.log('Failed:', err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <table className="table-login">
          <thead>
            <tr>
              <th colSpan="2"><h2 className="subtitle" >Login!</h2></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th><label className="lable-login" htmlFor="username">Usuário</label></th>
              <th><input id="username" type="text" autocomplite="off" /></th>
            </tr>
            <tr>
              <th><label className="lable-login" htmlFor="password">Senha</label></th>
              <th><input id="password" type="password" autocomplite="off" /></th>
            </tr>
            <tr>
              <th colSpan="2">
                <button className="btn btn-login" type="submit">Entrar</button>
              </th>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}

export default Login;