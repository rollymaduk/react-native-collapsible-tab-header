// @flow
import React from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';
import { compose, getContext, withProps, defaultProps, toClass } from 'recompose';
import style from './style';

import { getTranslateY } from './helpers';

const Component = ({ children, translateY, height, styles, onLayout }: any) => (
  <Animated.View
    onLayout={onLayout}
    style={[style.header(height), styles, { transform: [{ translateY }] }]}
  >
    {children}
  </Animated.View>
);

export default compose(
  defaultProps({ styles: { justifyContent: 'flex-end' }, tabHeight: 0 }),
  getContext({
    collapsibleProps: PropTypes.object,
  }),
  withProps(({ collapsibleProps, tabHeight }) => {
    const { height, clampedScroll, offsetFromTop } = collapsibleProps;
    return ({
      translateY: getTranslateY({ clampedScroll,
        height,
        bottomOffset: tabHeight + offsetFromTop,
        topOffset: offsetFromTop }),
      height,
    });
  }),
)(Component);
