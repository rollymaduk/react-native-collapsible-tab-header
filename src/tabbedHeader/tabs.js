// @flow
import React from 'react';
import { has, omit } from 'lodash';
import { Dimensions } from 'react-native';
import { TabViewAnimated } from 'react-native-tab-view';
import { compose, withProps, withHandlers, withState, defaultProps } from 'recompose';
import { getHeaderAndScenes } from '../helpers';

const Component = ({ style, onIndexChange, initialLayout, renderHeader, renderScenes, navigationState }: any) => (
  <TabViewAnimated
    initialLayout={initialLayout}
    navigationState={navigationState}
    renderScene={renderScenes}
    renderHeader={renderHeader}
    onIndexChange={onIndexChange}
  />
);

Component.propTypes = {};
Component.defaultProps = {};

export default compose(
  defaultProps({ initialLayout: {
    height: 0,
    width: Dimensions.get('window').width,
  },
  }),
  withProps(({ children, routes }) => {
    const { header, scenes } = getHeaderAndScenes({ children });
    return { header, scenes };
  }),
  withState('navigationState', 'setState', ({ routes }) => ({ index: 0, routes })),
  withHandlers({
    onIndexChange: ({ setState }) => (index) => {
      setState(state => ({ ...state, index }));
    },
    renderHeader: ({ header, ...rest }) => props =>
      React.cloneElement(header, { ...props, ...omit({ ...rest }, ['children']) }),

    renderScenes: ({ scenes }) => ({ route }) => {
      if (has(scenes, route.key)) {
        return React.cloneElement(scenes[route.key], { route });
      }
    },
  }),
)(Component);
