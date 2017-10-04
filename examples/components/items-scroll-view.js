// @flow
import React from 'react';
import { defaultProps } from 'recompose';
import { ListItem, List } from 'react-native-elements';
import { ScrollView } from 'react-native-collapsible-tab-header';
import createData from '../data';
import type { dataType } from '../types';

const Component = ({ data }: {data: Array<dataType>}) => (
  <List>
    <ScrollView>
      {data.map(item => (
        <ListItem
          key={item.id}
          subtitle={item.subtitle}
          title={item.title}
        />
      ))}
    </ScrollView>
  </List>
);

Component.propTypes = {};
Component.defaultProps = {};

export default defaultProps({
  data: createData(25),
})(Component);
