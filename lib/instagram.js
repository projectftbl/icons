import React, { Component } from 'react';
import Icon from './icon';

@Icon({ defaultColour: '#4e433c' })
export default class Instagram extends Component {
  render() {
    return (
      <path d='M20,2H4C2.9,2,2,2.9,2,4l0,16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M19,4v3h-2c-0.6,0-1,0.4-1,1v2h3v3h-3v7h-3v-7h-2v-3h2V7.5C13,5.6,14.6,4,16.5,4H19z'></path>
    );
  }
};
