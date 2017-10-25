// @flow
import React from 'react';
import { has, omit } from 'lodash';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import { TabViewAnimated } from 'react-native-tab-view';
import { compose, withProps, withHandlers, withState, defaultProps, withContext } from 'recompose';
import { getHeaderAndScenes } from '../helpers';
/* eslint react/prop-types:0 */
const Component = ({ onIndexChange, initialLayout,
  renderHeader, renderScenes, navigationState, swipeEnabled,
  tabsProps,
}: any) => (
  <TabViewAnimated
    initialLayout={initialLayout}
    navigationState={navigationState}
    renderScene={renderScenes}
    renderHeader={renderHeader}
    onIndexChange={onIndexChange}
    swipeEnabled={swipeEnabled}
    {...tabsProps}
  />
);
/* eslint react/forbid-prop-types:0 */
Component.propTypes = {
  swipeEnabled: PropTypes.bool,
  tabsProps: PropTypes.object,
};

export default compose(
  defaultProps({ initialLayout: {
    height: 0,
    width: Dimensions.get('window').width,
  },
  }),
  withProps(({ children }) => {
    const { header, scenes } = getHeaderAndScenes({ children });
    return { header, scenes };
  }),
  withState('navigationState', 'setState', ({ routes }) => ({ index: 0, routes })),
  withState('tabHeight', 'setTabHeight', 0),
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
  withContext({
    collapsibleTabsProps: PropTypes.object,
  }, ({ tabHeight, setTabHeight }) => ({ collapsibleTabsProps: { tabHeight, setTabHeight } })),
)(Component);
