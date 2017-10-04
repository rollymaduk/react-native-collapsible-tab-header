// @flow
import React from 'react';
import { View, Text } from 'react-native';
import { compose, defaultProps } from 'recompose';
import { ItemsCustomList } from '../components/index';
import { Collapsible, Header } from '../../index';
import styles from '../style';


const Component = ({ style }: {style: Object}) => (
  <Collapsible style={{ backgroundColor: 'snow' }} height={'35%'}>
    <View style={style.container} >

      <Header>
        <View>
          <Text>This is a header content</Text>
        </View>
      </Header>
      <ItemsCustomList />
    </View>
  </Collapsible>
);

export default compose(
  defaultProps({ style: styles }),
)(Component);

