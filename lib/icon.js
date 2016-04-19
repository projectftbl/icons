import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import color from 'color';

export const DEFAULT_SIZE = 24
           , DEFAULT_COLOUR = '#4183c4';

const noOp = () => { /* No op */ }

const determineViewBox = function(viewBox = [ DEFAULT_SIZE, DEFAULT_SIZE ]) {
  if (_(viewBox).isArray() === false) viewBox = [ viewBox ];
  if (viewBox.length === 1) viewBox.push(viewBox[0]);
  return [ 0, 0, viewBox[0], viewBox[1] ].join(' ');
};

export default function(props = {}) {
  const { viewBox
        , label
        , defaultColour = DEFAULT_COLOUR
        , defaultSize = DEFAULT_SIZE 
        , defaultWidth
        , defaultHeight
        } = props;

  return function Svg(Component) {

    @Radium
    class DecoratedIcon extends Component {
      render() {
        const { style
              , active
              , size = defaultSize
              , width = defaultWidth
              , height = defaultHeight
              , colour = defaultColour
              , allowHover = true 
              , rotate = false
              , onClick = noOp
              } = this.props;

        const rotateKeyframes = Radium.keyframes({
          from: { transform: 'rotate(0deg)' }
        , to: { transform: 'rotate(359deg)' }
        });

        const styles = {
          base: {
            width: width || size
          , height: height || size
          , verticalAlign: 'middle'
          , fill: colour
          , transition: 'fill 200ms ease-in'
          , ':hover': {
              fill: allowHover ? colour : color(colour).darken(0.4).hexString()
            }
          }
        , active: {
            fill: color(colour).darken(0.2).hexString()
          }
        , rotate: {
            animation: `${rotateKeyframes} 2s infinite linear`
          , transformOrigin: '50% 50%'
          }
        };

        return (
          <svg ariaLabel={label} style={[ styles.base, active && styles.active, rotate && styles.rotate, style ]} 
               viewBox={determineViewBox(viewBox)} width='0' height='0' onClick={onClick}>
            <Component {...this.props} />
          </svg>
        );
      }
    }

    return DecoratedIcon;
  };
};
