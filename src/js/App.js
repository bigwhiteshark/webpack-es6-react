import React, { Component } from 'react';
import style from '../css/index.less';
import Counter from './Counter';

export default class App extends Component {
  render() {
    return (
      <div>
        <Counter increment={1} color={style.blue}/>
        <Counter increment={9} color={style.red} />
      </div>
    );
  }
}