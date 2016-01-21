import React, { Component } from 'react';
import { assert } from 'chai';
import TestUtils from 'react-addons-test-utils';
import Icon, { DEFAULT_SIZE, DEFAULT_COLOUR } from '../lib/icon';

const createIcon = props => {
  @Icon(props)
  class Test extends Component {
    render() {
      return <path/>;
    }
  }

  return Test;
};

const setup = (Test, props) => {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Test {...props} />);

  return { props, output: renderer.getRenderOutput(), renderer };
};

describe('Icon decorator', () => {

  describe('when default properties are supplied', () => {
    let result;

    before(() => result = setup(createIcon()));

    it('should render svg', () => {
      assert.equal(result.output.type, 'svg');
    });

    it('should render children', () => {
      assert(result.output.props.children);
    });

    it('should set height and width to zero', () => {
      assert.equal(result.output.props.height, 0);
      assert.equal(result.output.props.width, 0);
    });

    it('should set default height and width in style', () => {
      assert.equal(result.output.props.style.width, DEFAULT_SIZE);
      assert.equal(result.output.props.style.height, DEFAULT_SIZE);
    });

    it('should set viewbox', () => {
      assert.equal(result.output.props.viewBox, `0 0 ${DEFAULT_SIZE} ${DEFAULT_SIZE}`);
    });

    it('should set default color', () => {
      assert.equal(result.output.props.style.fill, DEFAULT_COLOUR);
    });

    it('should set aria label', () => {
      assert.isUndefined(result.output.props.ariaLabel);
    });

  });

  describe('when setting default size', () => {
    let result;

    before(() => result = setup(createIcon({ defaultSize: 32 })));

    it('should render svg', () => {
      assert.equal(result.output.type, 'svg');
    });

    it('should set height and width to zero', () => {
      assert.equal(result.output.props.height, 0);
      assert.equal(result.output.props.width, 0);
    });

    it('should set default height and width in style', () => {
      assert.equal(result.output.props.style.width, 32);
      assert.equal(result.output.props.style.height, 32);
    });

    it('should set viewbox', () => {
      assert.equal(result.output.props.viewBox, `0 0 ${DEFAULT_SIZE} ${DEFAULT_SIZE}`);
    });

  });

  describe('when overriding default size', () => {
    let result;

    before(() => result = setup(createIcon({ defaultSize: 32 }), { size: 48 }));

    it('should render svg', () => {
      assert.equal(result.output.type, 'svg');
    });

    it('should set height and width to zero', () => {
      assert.equal(result.output.props.height, 0);
      assert.equal(result.output.props.width, 0);
    });

    it('should set default height and width in style', () => {
      assert.equal(result.output.props.style.width, 48);
      assert.equal(result.output.props.style.height, 48);
    });

    it('should set viewbox', () => {
      assert.equal(result.output.props.viewBox, `0 0 ${DEFAULT_SIZE} ${DEFAULT_SIZE}`);
    });

  });

  describe('when overriding default width', () => {
    let result;

    before(() => result = setup(createIcon({ defaultWidth: 16 }), { width: 18 }));

    it('should render svg', () => {
      assert.equal(result.output.type, 'svg');
    });

    it('should set height and width to zero', () => {
      assert.equal(result.output.props.width, 0);
    });

    it('should set default height and width in style', () => {
      assert.equal(result.output.props.style.width, 18);
    });

    it('should set viewbox', () => {
      assert.equal(result.output.props.viewBox, `0 0 ${DEFAULT_SIZE} ${DEFAULT_SIZE}`);
    });

  });

  describe('when overriding default height', () => {
    let result;

    before(() => result = setup(createIcon({ defaultHeight: 16 }), { height: 18 }));

    it('should render svg', () => {
      assert.equal(result.output.type, 'svg');
    });

    it('should set height and width to zero', () => {
      assert.equal(result.output.props.height, 0);
    });

    it('should set default height and width in style', () => {
      assert.equal(result.output.props.style.height, 18);
    });

    it('should set viewbox', () => {
      assert.equal(result.output.props.viewBox, `0 0 ${DEFAULT_SIZE} ${DEFAULT_SIZE}`);
    });

  });

  describe('when overriding default size with height', () => {
    let result;

    before(() => result = setup(createIcon({ defaultSize: 16 }), { height: 18 }));

    it('should render svg', () => {
      assert.equal(result.output.type, 'svg');
    });

    it('should set height and width to zero', () => {
      assert.equal(result.output.props.width, 0);
      assert.equal(result.output.props.height, 0);
    });

    it('should set default height and width in style', () => {
      assert.equal(result.output.props.style.width, 16);
      assert.equal(result.output.props.style.height, 18);
    });

    it('should set viewbox', () => {
      assert.equal(result.output.props.viewBox, `0 0 ${DEFAULT_SIZE} ${DEFAULT_SIZE}`);
    });

  });

  describe('when overriding default size with width', () => {
    let result;

    before(() => result = setup(createIcon({ defaultSize: 16 }), { width: 18 }));

    it('should render svg', () => {
      assert.equal(result.output.type, 'svg');
    });

    it('should set height and width to zero', () => {
      assert.equal(result.output.props.width, 0);
      assert.equal(result.output.props.height, 0);
    });

    it('should set default height and width in style', () => {
      assert.equal(result.output.props.style.width, 18);
      assert.equal(result.output.props.style.height, 16);
    });

    it('should set viewbox', () => {
      assert.equal(result.output.props.viewBox, `0 0 ${DEFAULT_SIZE} ${DEFAULT_SIZE}`);
    });

  });

  describe('when setting default color', () => {
    let result;

    before(() => result = setup(createIcon({ defaultColour: '#000' })));

    it('should render svg', () => {
      assert.equal(result.output.type, 'svg');
    });

    it('should set colour', () => {
      assert.equal(result.output.props.style.fill, '#000');
    });

  });

  describe('when overridding default color', () => {
    let result;

    before(() => result = setup(createIcon({ defaultColour: '#000' }), { colour: '#ccc' }));

    it('should render svg', () => {
      assert.equal(result.output.type, 'svg');
    });

    it('should set colour', () => {
      assert.equal(result.output.props.style.fill, '#ccc');
    });

  });

  describe('when overriding default colour', () => {
    let result;

    before(() => result = setup(createIcon(), { colour: '#000' }));

    it('should render svg', () => {
      assert.equal(result.output.type, 'svg');
    });

    it('should set overridden color', () => {
      assert.equal(result.output.props.style.fill, '#000');
    });

  });

  describe('when overriding default size', () => {
    let result;

    before(() => result = setup(createIcon(), { size: 24 }));

    it('should render svg', () => {
      assert.equal(result.output.type, 'svg');
    });

    it('should set height and width to zero', () => {
      assert.equal(result.output.props.height, 0);
      assert.equal(result.output.props.width, 0);
    });

    it('should set height and width in style', () => {
      assert.equal(result.output.props.style.width, 24);
      assert.equal(result.output.props.style.height, 24);
    });

    it('should set default viewbox', () => {
      assert.equal(result.output.props.viewBox, `0 0 ${DEFAULT_SIZE} ${DEFAULT_SIZE}`);
    });

  });

  describe('when overriding default width and height', () => {
    let result;

    before(() => result = setup(createIcon(), { width: 12, height: 16 }));

    it('should render svg', () => {
      assert.equal(result.output.type, 'svg');
    });

    it('should set height and width to zero', () => {
      assert.equal(result.output.props.height, 0);
      assert.equal(result.output.props.width, 0);
    });

    it('should set height and width in style', () => {
      assert.equal(result.output.props.style.width, 12);
      assert.equal(result.output.props.style.height, 16);
    });

    it('should set default viewbox', () => {
      assert.equal(result.output.props.viewBox, `0 0 ${DEFAULT_SIZE} ${DEFAULT_SIZE}`);
    });

  });
});
