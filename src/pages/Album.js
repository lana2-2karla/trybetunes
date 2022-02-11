import React from 'react';
import propTypes from 'prop-types';
import Header from './Header';
import getMusics from '../services/musicsAPI';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      musics: [],
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.setState({
      musics: await getMusics(id),
    });
  }

  render() {
    const { musics } = this.state;
    const { artworkUrl100, collectionName, artistName } = musics[0];
    return (
      <div data-testid="page-album">
        <Header />
        <h1>Album</h1>
        {musics.length > 0
        && <div>
          <img src={ artworkUrl100 } alt={ collectionName } />
          <span data-testid="artist-name">{ collectionName }</span>
          <span data-testid="album-name">{ artistName }</span>
        </div>
        }
      </div>
    );
  }
}

Album.propTypes = {
  match: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  params: propTypes.string.isRequired,
};
export default Album;
