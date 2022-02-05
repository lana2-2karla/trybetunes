import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  render() {
    return (
      <div data-testid="page-search">
        <Link to="/search">Search</Link>
      </div>
    );
  }
}
export default Search;
