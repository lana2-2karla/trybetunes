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
    this.setState({ loading: true });
    const listMusic = await getMusics(id);
    this.setState({
      musics: listMusic,
      loading: false,
    });
  }

  setLoading() {
    const SECONDS = 1;
    this.setState({ loading: true });
    setTimeout(() => this.setState({ loading: false }), SECONDS);
  }

  render() {
    const { musics, loading } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <h1>Album</h1>
        <div>
          { (musics.length === 0 || loading) ? <Loading />
            : (
              <>
                <img src={ musics[0].artworkUrl100 } alt={ musics[0].collectionName } />
                <span data-testid="artist-name">{ musics[0].artistName }</span>
                <span data-testid="album-name">{ musics[0].collectionName }</span>
              </>)}
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
