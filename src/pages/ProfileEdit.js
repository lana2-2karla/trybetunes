import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class ProfileEdit extends React.Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <Link to="/profile/edit">ProfileEdit</Link>
      </div>
    );
  }
}
export default ProfileEdit;
