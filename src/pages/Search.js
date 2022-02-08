import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import Header from './Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Album from './Album';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      disable: true,
      artist: [],
      valueInput: '',

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const ONE_SECONDS = 1000;
    setTimeout(() => this.setState({ loading: false }), ONE_SECONDS);
  }

  // LIMPAR THIS.STATE!!!!!!!!!
  // componentWillUnmount() {
  //   this.setState({loading:})
  // }
  handleChange({ target }) {
    const NUMBER_TWO = 2;
    if (target.value.length >= NUMBER_TWO) {
      this.setState({ disable: false, valueInput: target.value });
    }
  }

  async handleClick(event) {
    event.preventDefault();
    const { valueInput } = this.state;
    const ArrInfoArtist = await searchAlbumsAPI(valueInput);
    console.log(ArrInfoArtist);
    this.setState({
      artist: ArrInfoArtist,
      valueInput: '',
    });
  }

  render() {
    const { loading, disable, artist, valueInput } = this.state;
    console.log(artist);
    if (loading) return <Loading />;
    return (
      <div data-testid="page-search">
        <Header />
        <Link to="/search">Search</Link>
        <form>
          <label htmlFor="search-artist-input">
            <input
              onChange={ this.handleChange }
              type="text"
              data-testid="search-artist-input"
            />
            <button
              onClick={ this.handleClick }
              type="submit"
              data-testid="search-artist-button"
              disabled={ disable }
            >
              Pesquisar

            </button>
          </label>
        </form>
        <div>
          {artist.length !== 0
          && (
            <p>
              {`Resultado de álbuns de:
            ${valueInput}`}
            </p>
          )}
          {artist.map((card, i) => <Album key={ i } card={ card } />)}
        </div>
      </div>
    );
  }
}
export default Search;
