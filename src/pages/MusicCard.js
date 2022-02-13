import React from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

export default class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      check: false,
    };
  }

  componentDidMount() {
    this.verifyGetFavoriteSong();
  }

  handleClick(target, song) {
    if (target.checked) {
      addSong(song);
      this.setState({ check: true });
      const { setLoading } = this.props;
      setLoading();
    } else {
      removeSong(song);
      this.setState({ check: false });
    }
  }

  async verifyGetFavoriteSong() {
    const { song } = this.props;
    const favoriteSong = await getFavoriteSongs();
    const boolFavoriteSong = favoriteSong.some((music) => music.trackId === song.trackId);
    if (boolFavoriteSong) this.setState({ check: true });
  }

  render() {
    const { song: { trackName, previewUrl, trackId }, song } = this.props;
    const { check } = this.state;
    return (
      <div>
        <p>{ trackName }</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        <label htmlFor="favoriteSong">
          Favoritas
          <input
            checked={ check }
            onChange={ ({ target }) => this.handleClick(target, song) }
            type="checkbox"
            data-testid={ `checkbox-music-${trackId}` }
            id="favoriteSong"
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  setLoading: PropTypes.func.isRequired,
  song: PropTypes.shape().isRequired,
};
