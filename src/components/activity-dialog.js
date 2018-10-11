'use strict';
// import
import { connect } from 'react-redux';
import React from 'react';
import { clearAuth } from '../actions/auth';

//class for ActivityDialog
class ActivityDialog extends React.Component {
  constructor(props) {
    super(props);
    this.timer = null;
  }

  //invoked on DOM
  componentDidMount() {
    this.startTimer();
  }

  startTimer() {
    window.onload = () => {
      this.resetTimer(4000);
    };
    document.onmousemove = () => {
      this.resetTimer(4000);
    };
    document.onclick = () => {
      this.resetTimer(4000);
    };
  }

  showDialogue() {
    console.log('our dialogue box');
    this.resetTimer(1000);
    if (this.props.loggedIn) {
      this.resetTimer(4000);
    } else {
      console.log(this.props);
      this.props.dispatch(clearAuth());
    }
  }

  resetTimer(t) {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    //binds 'this' to the classes scope .bind(this)
    this.timer = setTimeout(this.showDialogue.bind(this), t); //240000
  }

  render() {
    return (
      <div>
        <p />
        <p />
      </div>
    );
  }
}

//mapStateToProps
const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
  // time: state.activity.time,
  // dialogue: state.activity.dialogue
});

//export default connect
export default connect(mapStateToProps)(ActivityDialog);
