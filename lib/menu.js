import React, { Component } from 'react';
import Icon from './icon';

@Icon()
export default class Menu extends Component {
  render() {
    return (
      <path d='M3,18h18v-2H3V18z M3,13h18v-2H3V13z M3,6v2h18V6H3z'></path>
    );
  }
};
