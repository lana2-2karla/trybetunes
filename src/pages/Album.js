import React from 'react';
import { Link } from 'react-router-dom';

class Album extends React.Component {
  render() {
    return (
      <div data-testid="page-album">
        <Link to="/album/:id">Album</Link>
      </div>
    );
  }
}
export default Album;
