import React from 'react';
import { Link } from 'react-router-dom';

class ProfileEdit extends React.Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <Link to="/profile/edit">ProfileEdit</Link>
      </div>
    );
  }
}
export default ProfileEdit;
