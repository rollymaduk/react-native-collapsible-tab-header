// @flow
import React from 'react';
import { Animated } from 'react-native';
import { compose, getContext, withProps, flattenProp, onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';
import { getTranslateY } from '../helpers';

type Type={
    height: number,
    translateY: any,
    children: any,
}
const Component = ({ height, translateY, children }: Type) => (
  <Animated.View style={[{ flex: 1, paddingTop: height }, { transform: [{ translateY }] }]}>
    {React.Children.only(children)}
  </Animated.View>
);

export default compose(
  getContext({
    collapsibleProps: PropTypes.object,
    collapsibleTabsProps: PropTypes.object,
  }),
  flattenProp('collapsibleTabsProps'),
  withProps(({ collapsibleProps, tabHeight }) => {
    const { height, clampedScroll, offsetFromTop } = collapsibleProps;
    const translateY = getTranslateY({ clampedScroll,
      height,
      bottomOffset: tabHeight + offsetFromTop,
      topOffset: offsetFromTop,
    });
    return { translateY, height };
  }),
  onlyUpdateForKeys(['translateY']),
)(Component);
