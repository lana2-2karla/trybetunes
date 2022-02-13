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
      loading: false,
    };
    this.setLoading = this.setLoading.bind(this);
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

  setLoading() {
    const SECONDS = 1000;
    this.setState({ loading: true });
    setTimeout(() => this.setState({ loading: false }), SECONDS);
  }

  render() {
    const { musics, loading } = this.state;
    if (musics.length === 0 || loading) return <Loading />;
    const { artworkUrl100, collectionName, artistName } = musics[0];
    if (loading) return <Loading />;
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
                setLoading={ this.setLoading }
              />))}
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  match: propTypes.shape().isRequired,
};
export default Album;
