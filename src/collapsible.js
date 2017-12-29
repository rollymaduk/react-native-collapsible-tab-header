// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { compose, withProps, withContext,
  defaultProps, toClass } from 'recompose';
import { View } from 'react-native';
import { getDefaultValues, getWithProps } from './helpers';

const Component = ({ children, style }: any) => (
  <View style={style}>
    {children}
  </View>);
/* eslint react/forbid-prop-types:0 */
Component.propTypes = {
  hasNavBar: PropTypes.bool,
  offsetFromTop: PropTypes.number,
  children: PropTypes.any,
  style: PropTypes.object,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number],
  ),
};

export default compose(
  defaultProps(getDefaultValues()),
  withProps(getWithProps),
  withContext({
    collapsibleProps: PropTypes.object,
  }, props => ({ collapsibleProps: { ...props } })),
)(Component);
