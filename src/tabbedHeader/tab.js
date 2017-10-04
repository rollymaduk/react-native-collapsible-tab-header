// @flow
import React from 'react';
import { setDisplayName, compose } from 'recompose';

const DISPLAY_NAME = 'CollapsibleTabItem';

const Component = ({ children }) => (
  React.Children.only(children)
);

Component.propTypes = {};
Component.defaultProps = {};

export default compose(
  setDisplayName(DISPLAY_NAME),
)(Component);
