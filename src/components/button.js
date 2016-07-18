import React, { Component } from 'react';

const styles = {
  button: {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: '#fff',
  }
}

export default class Button extends Component {

  render(){
    return (<button onClick={this.props.invokeFunc} style={styles.button}>{this.props.name}!</button>)
  }

}

export const ButtonFunctional = (props) => {
  return (<button style={styles.button}>{props.name}!</button>)
}
