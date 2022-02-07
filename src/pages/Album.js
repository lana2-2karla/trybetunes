import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class Album extends React.Component {
  render() {
    return (
      <div data-testid="page-album">
        <Header />
        <Link to="/album/:id">Album</Link>
      </div>
    );
  }
}
export default Album;
