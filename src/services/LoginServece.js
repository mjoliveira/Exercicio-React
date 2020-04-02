import { login, logout } from './AuthenticationService';

export const LoginService = ({ username, password }) => {
  try {
    const correct = username === 'admin' && password === 'admin';

    if (correct) {
      login(username);
    } else {
      logout();
    }

    return correct;

  } catch (err) {
    console.log('Failed:', err);
    return false;
  }
}