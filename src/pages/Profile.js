import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class Profile extends React.Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Header />
        <Link to="/profile">Profile</Link>
      </div>
    );
  }
}
export default Profile;
