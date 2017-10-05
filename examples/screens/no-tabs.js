// @flow
import React from 'react';
import { View, Text } from 'react-native';
import { compose, defaultProps } from 'recompose';
import { Collapsible, Header } from 'react-native-collapsible-tab-header';
import { ItemsCustomList } from '../components/index';
import styles from '../style';


const Component = ({ style }: {style: Object}) => (
  <Collapsible hasNavBar={false} style={{ backgroundColor: 'snow' }} height={'35%'}>
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

