// @flow
import React from 'react';
import { ScrollView, Animated } from 'react-native';
import { defaultProps } from 'recompose';
import { ListItem, List } from 'react-native-elements';
import { Scrollable } from 'react-native-collapsible-tab-header';
import createData from '../data';
import type { dataType } from '../types';

const AnimatedScrollable = Animated.createAnimatedComponent(ScrollView);
const MyCustomScrollView = Scrollable(AnimatedScrollable);

const Component = ({ data }: {data: Array<dataType>}) => (
  <List>
    <MyCustomScrollView>
      {data.map(item => (
        <ListItem
          key={item.id}
          subtitle={item.subtitle}
          title={item.title}
        />
      ))}
    </MyCustomScrollView>
  </List>
);

Component.propTypes = {};
Component.defaultProps = {};

export default defaultProps({
  data: createData(25),
})(Component);
