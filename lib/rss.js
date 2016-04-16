import React, { Component } from 'react';
import Icon from './icon';

@Icon({ defaultColour: '#fa9b39', viewBox: [ 100, 100 ] })
export default class Rss extends Component {
  render() {
    const { shape = 'square', colour } = this.props;

    const foreground = shape === 'none' ? colour : '#fff';

    return (
      <g>
        {shape === 'circle' && <circle cx='50' cy='50' r='48' style={{opacity:1}} />}
        {shape === 'square' && <rect width='96' height='96' style={{opacity:1}} />}
        <path style={{opacity:1,fill:foreground}}  transform='translate(25,25) scale(0.5)' d='M14.044,72.866C6.848,72.866,1,78.736,1,85.889c0,7.192,5.848,12.997,13.044,12.997c7.223,0,13.062-5.804,13.062-12.997 C27.106,78.736,21.267,72.866,14.044,72.866z M1.015,34.299v18.782c12.229,0,23.73,4.782,32.392,13.447 C42.057,75.172,46.832,86.725,46.832,99h18.865C65.697,63.321,36.672,34.3,1.015,34.299L1.015,34.299z M1.038,1v18.791 C44.657,19.792,80.16,55.329,80.16,99H99C99,44.979,55.048,1,1.038,1z'></path>
      </g>
    );
  }
};
