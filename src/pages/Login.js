import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      disable: true,
      name: '',
      loading: false,
    };
    this.enableButton = this.enableButton.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { name } = this.state;
    createUser({ name });
    this.setState({ loading: true });
  }

  enableButton({ target }) {
    const NUMBER_THREE = 3;
    if (target.value.length >= NUMBER_THREE) {
      this.setState({ disable: false,
        name: target.value });
    }
  }

  /*  <Redirect/> navegará para um novo local. O novo local substituirá o local atual!!
  src: https://v5.reactrouter.com/web/api/Redirect */
  render() {
    const { disable, loading } = this.state;
    if (loading) return <Redirect to="/search" />;
    return (
      <div data-testid="page-login">
        <Link to="/">Login</Link>
        <form>
          <label htmlFor="login-name-input">
            <input
              onChange={ this.enableButton }
              type="text"
              data-testid="login-name-input"
            />
            <button
              onClick={ this.handleClick }
              type="submit"
              data-testid="login-submit-button"
              disabled={ disable }
            >
              Entrar

            </button>
          </label>
        </form>
      </div>
    );
  }
}

export default Login;
