import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const ONE_SECONDS = 1000;
    setTimeout(() => this.setState({ loading: false }), ONE_SECONDS);
  }
  // LIMPAR THIS.STATE!!!!!!!!!
  // componentWillUnmount() {
  //   this.setState({loading:})
  // }

  render() {
    const { loading } = this.state;
    if (loading) return <Loading />;
    return (
      <div data-testid="page-search">
        <Link to="/search">Search</Link>
      </div>
    );
  }
}
export default Search;
