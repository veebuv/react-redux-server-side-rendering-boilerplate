import React from 'react';
import { Component } from 'react';
import Button from './button.js';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [1,2,3,4,5],
      data1: ['a','b','c','d','e'],
      selected: [],
    }
    this.change = this.change.bind(this);
  }

  renderArray() {
    const { selected } = this.state;
    return selected.map((element, key) => <div key={key}>{element}</div>)
  }

  change(number) {
    const { data, data1 } = this.state;

    this.setState({
      selected: number === 1 ? data : data1,
    })
  }

  render() {
    return (
      <div>
        <Button invokeFunc={() => this.change(1)} name='Press Me!'/>
        <Button invokeFunc={() => this.change(2)} name='Press Me Twice!'/>
        {this.renderArray()}
      </div>

    );
  }
}
