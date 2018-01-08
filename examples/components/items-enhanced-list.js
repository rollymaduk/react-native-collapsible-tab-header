// @flow
import React from 'react';
import { ScrollView, Animated } from 'react-native';
import { defaultProps } from 'recompose';
import { List } from 'react-native-elements';
import { Scrollable } from '../../src/index';
import createData from '../data';
import type { dataType } from '../types';
import EnhancedList from './utils';

const AnimatedScrollable = Animated.createAnimatedComponent(ScrollView);
const MyCustomScrollView = Scrollable(AnimatedScrollable);

const Component = ({ data }: {data: Array<dataType>}) => (
  <List>
    <EnhancedList
      data={data}
      externalScrollView={MyCustomScrollView}
    />
  </List>
);

Component.propTypes = {};
Component.defaultProps = {};

export default defaultProps({
  data: createData(25),
})(Component);
