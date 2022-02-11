import React from 'react';
import propTypes from 'prop-types';
import Header from './Header';
import getMusics from '../services/musicsAPI';
import MusicCard from './MusicCard';
import Loading from './Loading';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      musics: [],
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const listMusic = await getMusics(id);
    this.setState({
      musics: listMusic,
    });
  }

  render() {
    const { musics } = this.state;
    if (musics.length === 0) return <Loading />;
    const { artworkUrl100, collectionName, artistName } = musics[0];
    return (
      <div data-testid="page-album">
        <Header />
        <h1>Album</h1>
        <div>
          <img src={ artworkUrl100 } alt={ collectionName } />
          <span data-testid="artist-name">{ artistName }</span>
          <span data-testid="album-name">{ collectionName }</span>
        </div>
        <div>
          { musics.filter(({ kind }) => kind === 'song')
            .map((song) => (
              <MusicCard
                key={ song.trackId }
                song={ song }
              />))}
        </div>
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
