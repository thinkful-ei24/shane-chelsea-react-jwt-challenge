import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import ActivityDialog from './activity-dialog';
// import { clearAuthToken } from '../local-storage';

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    //  clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    let load;
    if (this.props.loggedIn) {
      logOutButton = <button onClick={() => this.logOut()}>Log out</button>;
      load = <ActivityDialog />;
    } else {
      load = null;
    }

    return (
      <React.Fragment>
        {load}
        <div className="header-bar">
          <h1>Foo App</h1>
          {logOutButton}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
