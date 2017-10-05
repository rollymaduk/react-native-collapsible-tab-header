// @flow
import React from 'react';
import { Animated, View } from 'react-native';
import PropTypes from 'prop-types';
import { setDisplayName, compose,
  defaultProps, onlyUpdateForKeys } from 'recompose';
import Tab from './tab-not-scrollable';
import ScrollableTab from './tab-scrollable';

const DISPLAY_NAME = 'CollapsibleTabItem';

const Component = ({ children, hasScrollable }) => (

  (hasScrollable) ?
    <ScrollableTab>
      {children}
    </ScrollableTab> :
    <Tab>
      {children}
    </Tab>

)

;

export default compose(
  setDisplayName(DISPLAY_NAME),
  defaultProps({ hasScrollable: true }),
)(Component);
