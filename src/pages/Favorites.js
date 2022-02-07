import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class Favorites extends React.Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Header />
        <Link to="/favorites">Favorites</Link>
      </div>
    );
  }
}
export default Favorites;
