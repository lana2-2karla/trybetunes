import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import Header from './Header';

class Album extends React.Component {
  render() {
    const { card } = this.props;
    return (
      <div data-testid="page-album">
        <Header />
        <Link to="/album/:id">{ card.artistName }</Link>
      </div>
    );
  }
}
Album.propTypes = {
  card: propTypes.shape().isRequired,
};
export default Album;
