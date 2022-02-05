import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <>
            <p>TrybeTunes</p>
            <Route path="/">
              <Login />
            </Route>
            <Route path="/album/:id">
              <Album />
            </Route>
            <Route path="/favorites">
              <Favorites />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/profile/edit">
              <ProfileEdit />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </>
        </Switch>
      </Router>

    );
  }
}

export default App;
