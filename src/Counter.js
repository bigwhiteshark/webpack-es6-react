import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h1 style={{ color: this.props.color }}>
        Counter-> ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}
