// @flow
import React from 'react';
import { defaultProps } from 'recompose';
import { ListItem, List } from 'react-native-elements';
import { FlatList } from 'react-native-collapsible-tab-header';
import createData from '../data';
import type { dataType } from '../types';

const Component = ({ data }: {data: Array<dataType>}) => (
  <List>
    <FlatList
      data={data}
      keyExtractor={(item: dataType) => item.id}
      renderItem={({ item }: {item: dataType}) => (
        <ListItem
          subtitle={item.subtitle}
          title={item.title}
        />
      )}
    />
  </List>
);

Component.propTypes = {};
Component.defaultProps = {};

export default defaultProps({
  data: createData(25),
})(Component);
