import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div data-testid="page-login">
        <Link to="/">Login</Link>
      </div>
    );
  }
}
export default Login;
