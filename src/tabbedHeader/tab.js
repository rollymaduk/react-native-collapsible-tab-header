// @flow
import React from 'react';
import { setDisplayName, compose, withProps, getContext } from 'recompose';
import { getTabContentStyle } from '../helpers';

const DISPLAY_NAME = 'CollapsibleTabItem';

const Component = ({ children, style }) => (
  React.Children.only(children, { ...style })
);

export default compose(
  setDisplayName(DISPLAY_NAME),
  getContext({
    collapsibleProps: PropTypes.object,
  }),
  withProps(({ collapsibleProps, children }) => {
    const { height } = collapsibleProps;
    return {
      style: getTabContentStyle({ children, height }),
    };
  }),
)(Component);
