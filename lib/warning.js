import React, { Component } from 'react';
import Icon from './icon';

@Icon()
export default class Warning extends Component {
  render() {
    return (
      <path d='M1,21h22L12,2L1,21z M13,18h-2v-2h2V18z M13,14h-2v-4h2V14z'></path>
    );
  }
};
