import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './app.css';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'greeting',
    };
  }

  render() {
    const { initialMessage } = this.state;
    return (
      <div className={styles.root}>
        {initialMessage}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

export default connect(mapStateToProps)(App);
