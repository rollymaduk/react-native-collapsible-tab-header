// @flow
import React from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';
import { compose, getContext, withProps, defaultProps } from 'recompose';
import style from './style';


const Component = ({ children, translateY, height, styles }: any) => {
  return (
    <Animated.View style={[style.header(height), styles, { transform: [{ translateY }] }]} >
      {children}
    </Animated.View>
  );
};

export default compose(
  defaultProps({ styles: { justifyContent: 'flex-end' } }),
  getContext({
    collapsibleProps: PropTypes.object,
  }),
  withProps(({ collapsibleProps, tabHeight }) => {
    const { height, clampedScroll } = collapsibleProps;
    return ({
      translateY: clampedScroll.interpolate({
        inputRange: [0, height],
        outputRange: [0, -(height - Math.round(tabHeight))],
        extrapolate: 'clamp',
      }),
      height,
    });
  }),
)(Component);
