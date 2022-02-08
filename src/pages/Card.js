import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class card extends React.Component {
  render() {
    const { cardzinho: { collectionId, artworkUrl100, collectionName }, i } = this.props;
    return (
      <Link
        to={ `/album/${collectionId}` }
        data-testid={ `link-to-album-${collectionId}` }
      >
        <div data-testid="page-album">
          <img src={ artworkUrl100 } alt={ collectionName } />
          <span>{`Album Name ${i}`}</span>
        </div>
      </Link>
    );
  }
}
card.propTypes = {
  cardzinho: propTypes.shape().isRequired,
  i: propTypes.number.isRequired,
};
export default card;
