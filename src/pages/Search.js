import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import Header from './Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      disable: true,
    };
    this.handleChange = this.handleChange.bind(this);
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
      this.setState({ disable: false });
    }
  }

  render() {
    const { loading, disable } = this.state;
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
              type="submit"
              data-testid="search-artist-button"
              disabled={ disable }
            >
              Pesquisar

            </button>
          </label>
        </form>
      </div>
    );
  }
}
export default Search;
