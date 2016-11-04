import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      <div>
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
