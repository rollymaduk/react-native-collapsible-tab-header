// @flow
import React from 'react';
import { View, Text } from 'react-native';
import { compose, defaultProps } from 'recompose';
import { Collapsible, Tabs, TabHeader, Tab } from 'react-native-collapsible-tab-header';
import { ItemsScrollView, ItemsFlatList, ItemsCustomList } from '../components/index';
import styles from '../style';


const ICON_TYPE = 'simple-line-icon';
const USERS_ICON = 'people';
const ROUTE_ICON = 'location-pin';
const PRODUCT_ICON = 'grid';
const REPORT_ICON = 'chart';

const Component = ({ style }: {style: Object}) => (
  <Collapsible hasNavBar={false} style={{ backgroundColor: 'snow' }} height={'35%'}>
    <View style={style.container} >
      <Tabs
        style={style.tabs}
        tabStyle={style.tab}
        labelStyle={style.label}
        routes={[
          { key: 'flat-list', title: 'FlatList', icon: { type: ICON_TYPE, name: USERS_ICON } },
          { key: 'scroll-view', title: 'ScrollView', icon: { type: ICON_TYPE, name: PRODUCT_ICON } },
          { key: 'custom', title: 'Custom', icon: { type: ICON_TYPE, name: ROUTE_ICON } },
          { key: 'content', title: 'Content', icon: { type: ICON_TYPE, name: REPORT_ICON } },
        ]}
      >
        <TabHeader>
          <View>
            <Text>This is a header content</Text>
          </View>
        </TabHeader>
        <Tab key={'flat-list'}>
          <ItemsFlatList />
        </Tab>
        <Tab key={'scroll-view'}>
          <ItemsScrollView />
        </Tab>
        <Tab key={'custom'}>
          <ItemsCustomList />
        </Tab>
        <Tab hasScrollable={false} key={'content'}>
          <View>
            <Text> this is just a content </Text>
          </View>
        </Tab>
      </Tabs>
    </View>
  </Collapsible>
);

export default compose(
  defaultProps({ style: styles }),
)(Component);

