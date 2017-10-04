// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { setDisplayName, compose, withProps, getContext, defaultProps } from 'recompose';


const DISPLAY_NAME = 'CollapsibleTabItem';

const Component = ({ children, style }) => {
  const child = React.Children.only(children);
  return React.cloneElement(child, { style });
};

export default compose(
  setDisplayName(DISPLAY_NAME),
  defaultProps({ hasScrollable: true }),
  getContext({
    collapsibleProps: PropTypes.object,
  }),
  withProps(({ collapsibleProps, hasScrollable }) => {
    const { height } = collapsibleProps;
    const style = (!hasScrollable) ? { paddingTop: height } : {};
    return { style };
  }),
)(Component);
