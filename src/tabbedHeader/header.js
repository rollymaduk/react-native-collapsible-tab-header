// @flow
import React from 'react';
import { View, Animated } from 'react-native';
import { has } from 'lodash';
import PropTypes from 'prop-types';
import { TabBar } from 'react-native-tab-view';
import { setDisplayName, compose, withHandlers,
  withState, onlyUpdateForKeys, defaultProps, withProps, getContext } from 'recompose';
import Header from '../header';
import Icon from '../utils/icon';
import type { Iroute } from '../types';

const DEFAULT_COLOR = '#FFFFFF';
const DEFAULT_FONT_SIZE = 12;
const DEFAULT_ICON_SIZE = 18;

const DEFAULT_ICON_STYLE = { fontSize: DEFAULT_ICON_SIZE, color: DEFAULT_COLOR };
const DEFAULT_LABEL_STYLE = { fontSize: DEFAULT_FONT_SIZE, color: DEFAULT_COLOR };
const DEFAULT_INDICATOR_STYLE = { backgroundColor: DEFAULT_COLOR };
const DEFAULT_HEADER_STYLE = { backgroundColor: DEFAULT_COLOR, flex: 1 };
const DISPLAY_NAME = 'CollapsibleTabHeader';

const Component = ({ children, onLayout, opacity, tabHeight, styles, ...rest }: any) => (
  <Header tabHeight={tabHeight}>
    <View style={styles}>
      <Animated.View style={{ opacity }}>
        {React.Children.only(children)}
      </Animated.View>
    </View>
    <View onLayout={onLayout}>
      <TabBar
        {...rest}
      />
    </View>
  </Header>);


export default compose(
  setDisplayName(DISPLAY_NAME),
  getContext({
    collapsibleProps: PropTypes.object,
  }),
  defaultProps({
    iconStyle: {},
    labelStyle: {},
    indicatorStyle: {},
    styles: {},
  }),
  withProps(({ collapsibleProps, iconStyle, activeIconStyle,
    inactiveIconStyle, labelStyle, indicatorStyle, styles }) => {
    const { height, clampedScroll } = collapsibleProps;
    return ({
      activeIconStyle: activeIconStyle || { ...DEFAULT_ICON_STYLE, ...iconStyle },
      inactiveIconStyle: inactiveIconStyle || { ...DEFAULT_ICON_STYLE, ...iconStyle },
      labelStyle: { ...DEFAULT_LABEL_STYLE, ...labelStyle },
      indicatorStyle: { ...DEFAULT_INDICATOR_STYLE, ...indicatorStyle },
      styles: { ...DEFAULT_HEADER_STYLE, ...styles },
      opacity: clampedScroll.interpolate({
        inputRange: [0, height],
        outputRange: [1, 0],
        extrapolate: 'clamp',
      }),
    });
  }),
  withState('tabHeight', 'setHeight', 0),
  withHandlers({
    onLayout: ({ setHeight }) => (e) => {
      const { height } = e.nativeEvent.layout;
      setHeight(height);
    },
    renderIcon: ({ activeIconStyle, inactiveIconStyle }) =>
      (scene: {route: Iroute}) => {
        if (has(scene, 'route.icon')) {
          return (
            <Icon
              {...scene.route.icon}
              iconStyle={(scene.focused) ? activeIconStyle : inactiveIconStyle}
            />);
        }
        return null;
      },
  }),
  onlyUpdateForKeys(['tabHeight', 'layout', 'navigationState', 'position']),
)(Component);
