// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { compose, withProps, withContext,
  defaultProps } from 'recompose';
import { View } from 'react-native';
import { getDefaultValues, getWithProps } from './helpers';

const Component = ({ children, style }: any) => (
  <View style={style}>
    {children}
  </View>);

Component.propTypes = {
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
    collapsibleProps: React.PropTypes.object,
  }, props => ({ collapsibleProps: { ...props } })),
)(Component);
