import React, { Component } from 'react';
import Icon from './icon';

@Icon({ viewBox: [ 455, 455 ], defaultSize: 20 })
export default class Up extends Component {
  render() {
    return (
      <path d='M227.5,0C101.855,0,0,101.855,0,227.5S101.855,455,227.5,455S455,353.145,455,227.5S353.145,0,227.5,0z M334.411,276.772
        L227.5,170.209L120.589,276.772l-21.178-21.248L227.5,127.852l128.089,127.673L334.411,276.772z'/>
    );
  }
};
