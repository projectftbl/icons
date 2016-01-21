import React, { Component } from 'react';
import Icon from './icon';

@Icon()
export default class Forward extends Component {
  render() {
    return (
      <polygon points='10,6 8.6,7.4 13.2,12 8.6,16.6 10,18 16,12'/>
    );
  }
};
