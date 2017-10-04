// @flow
import React from 'react';
import { ScrollView } from 'react-native';
import { defaultProps } from 'recompose';
import { ListItem, List } from 'react-native-elements';
import { Scrollable } from '../../src';
import createData from '../data';
import type { dataType } from '../types';

const MyCustomScrollView = Scrollable(ScrollView);

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
