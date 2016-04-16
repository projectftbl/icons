import React, { Component } from 'react';
import Icon from './icon';

@Icon({ defaultColour: '#3b5998', viewBox: [ 48, 48 ] })
export default class Facebook extends Component {
  render() {
    const { shape = 'square', colour } = this.props;

    const foreground = shape === 'none' ? colour : '#fff';

    return (
      <g>
        {shape === 'circle' && <circle cx='24' cy='24' r='23' style={{opacity:1}}/>}
        {shape === 'square' && <rect width='46' height='46' style={{opacity:1}}/>}
        <g>
          <path style={{fill:foreground}} d='M20,39h6c0,0,0-8.282,0-15h4.453L31,18h-4.768v-2.399c0-1.169,0.779-1.441,1.326-1.441
            c0.547,0,3.366,0,3.366,0V9.019L26.289,9c-5.145,0-6.314,3.834-6.314,6.288V18H17v6h3C20,30.799,20,39,20,39z'/>
          <path style={{fill:foreground}} d='M20,39h6c0,0,0-8.282,0-15h4.453L31,18h-4.768v-2.399c0-1.169,0.779-1.441,1.326-1.441
            c0.547,0,3.366,0,3.366,0V9.019L26.289,9c-5.145,0-6.314,3.834-6.314,6.288V18H17v6h3C20,30.799,20,39,20,39z'/>
          <path style={{fill:foreground}} d='M20,39h6c0,0,0-8.282,0-15h4.453L31,18h-4.768v-2.399c0-1.169,0.779-1.441,1.326-1.441
            c0.547,0,3.366,0,3.366,0V9.019L26.289,9c-5.145,0-6.314,3.834-6.314,6.288V18H17v6h3C20,30.799,20,39,20,39z'/>
        </g>
      </g>   
    );
  }
};
