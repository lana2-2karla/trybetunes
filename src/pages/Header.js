import React from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      loading: false,
    };
    this.test = this.changeState.bind(this);
  }

  componentDidMount() {
    this.changeState();
  }

  async changeState() {
    this.setState({ loading: true });
    const userName = await getUser();
    this.setState({
      user: userName.name,
      loading: false,
    });
  }

  render() {
    const { loading, user } = this.state;
    return (
      <header data-testid="header-component">
        { loading ? <Loading /> : <p data-testid="header-user-name">{ user }</p>}
      </header>
    );
  }
}
// Super ajuda de Esdras Tenório - Turma XP - Tribo B
export default Header;
