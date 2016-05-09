import React, { Component } from 'react';
import Counter from './Counter';
import { NICE, SUPER_NICE } from './colors';

export default class App extends Component {
  render() {
    return (
      <div>
        <Counter increment={1} color={NICE} />
        <Counter increment={9} color={SUPER_NICE} />
      </div>
    );
  }
}