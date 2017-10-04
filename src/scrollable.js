// @flow
import React from 'react';
import { Animated } from 'react-native';
import withLifecycle from '@hocs/with-lifecycle';
import { compose, getContext, withProps, withHandlers,setDisplayName } from 'recompose';

const DISPLAY_NAME = 'scrollableComponent'
const scrollEventThrottle = 1;
export default function (AnimatedList: any) {
  const Component = ({
    onScrollEndDrag,
    onMomentumScrollBegin,
    onMomentumScrollEnd,
    scrollAnim,
    height,
    ...rest
  }: any) => (
    <AnimatedList
      contentContainerStyle={{ paddingTop: height }}
      {...{ scrollEventThrottle,
        onScrollEndDrag,
        onMomentumScrollBegin,
        onMomentumScrollEnd }}
      {...rest}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollAnim } } }],
        { useNativeDriver: true },
      )}
    />
  );

  return compose(
    setDisplayName(DISPLAY_NAME),
    getContext({
      collapsibleProps: React.PropTypes.object,
    }),
    withProps(({ collapsibleProps }) => {
      const { offsetAnim, scrollAnim, height, scrollable, collapseHeight } = collapsibleProps;
      return {
        offsetAnim,
        scrollAnim,
        height,
        scrollable,
        collapseHeight,
      };
    }),
    withHandlers({
      onMomentumScrollEnd: ({ scrollable, ...rest }) => () => {
        scrollable.momentumScrollEnd({ ...rest });
      },
      onMomentumScrollBegin: ({ scrollable, ...rest }) => () => {
        scrollable.momentumScrollBegin({ ...rest });
      },
      onScrollEndDrag: ({ scrollable, ...rest }) => () => {
        scrollable.scrollEndDrag({ ...rest });
      },
    }),

    withLifecycle({
      onDidMount: ({ scrollable, ...rest }) => scrollable.onDidMount({ ...rest }),
      onWillUnmount: ({ scrollable, ...rest }) => scrollable.onWillUnmount({ ...rest }),
    }),

  )(Component);
}

