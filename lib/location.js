import React, { Component } from 'react';
import Icon from './icon';

@Icon()
export default class Location extends Component {
  render() {
    return (
      <path d='M12,2C8.1,2,5,5.1,5,9c0,5.2,7,13,7,13s7-7.8,7-13C19,5.1,15.9,2,12,2z M12,11.5c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5S13.4,11.5,12,11.5z'></path>
    );
  }
};
