// @flow
import React from 'react';
import { onlyUpdateForKeys, defaultProps, compose } from 'recompose';

type Type={
    children: any
}

const Component = ({ children }: Type) => (
  React.Children.only(children)
);

export default compose(
  defaultProps({ hasScrollable: true }),
  onlyUpdateForKeys(['hasScrollable']),
)(Component);
