import React from 'react';
import { Link } from 'react-router-dom';

class Favorites extends React.Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Link to="/favorites">Favorites</Link>
      </div>
    );
  }
}
export default Favorites;
