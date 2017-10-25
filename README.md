[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)](https://github.com/rollymaduk/react-native-collapsible-tab-header)
[![GitHub issues](https://img.shields.io/github/issues/rollymaduk/react-native-collapsible-tab-header.svg)](https://github.com/rollymaduk/react-native-collapsible-tab-header/issues)
[![npm](https://img.shields.io/npm/dw/localeval.svg)](https://github.com/rollymaduk/react-native-collapsible-tab-header)
[![npm](https://img.shields.io/npm/v/npm.svg)](https://github.com/rollymaduk/react-native-collapsible-tab-header)
[![David](https://img.shields.io/david/expressjs/express.svg)](https://github.com/rollymaduk/react-native-collapsible-tab-header)
# react-native-collapsible-tab-header
Group of react-native components to ease implementation of collapsible headers with tabs

### Installation
```yarn add react-native-collapsible-tab-header```

### Usage
Create your custom scrollable
```javascript
 // @flow
 import React from 'react';
 import { ScrollView,Animated } from 'react-native';
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
 ```
 or use one of in built scrollables like the flatlist or scrollview
 
 ```javascript
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
```
create your  collapsible tab component

```javascript
// @flow
import React from 'react';
import { View, Text } from 'react-native';
import { compose, defaultProps } from 'recompose';
import { ItemsScrollView, ItemsFlatList, ItemsCustomList } from '../components/index';
import { Collapsible, Tabs, TabHeader, Tab } from 'react-native-collapsible-tab-header';
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
        <Tab key={'flat-List'}>
          <ItemsFlatList />
        </Tab>
        <Tab key={'scroll-view'}>
          <ItemsScrollView />
        </Tab>
        <Tab key={'custom'}>
          <ItemsCustomList />
        </Tab>
        <Tab hasScrollable={false} key={'content'}>
          <Text> this is just a content </Text>
        </Tab>
      </Tabs>
    </View>
  </Collapsible>
);

export default compose(
  defaultProps({ style: styles }),
)(Component);


```
or without tabs
```javascript
    // @flow
    import React from 'react';
    import { View, Text } from 'react-native';
    import { compose, defaultProps } from 'recompose';
    import { ItemsCustomList } from '../components/index';
    import { Collapsible, Header } from 'react-native-collapsible-tab-header';
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
    
```
learn more from the examples folder

### API

#### Collapsible:
React native parent component to create collapsible component <br>
**Props**
1. **height(number | string)-default('30%')**: height of collapsible header in either percentage or fixed length.
2. **collapseHeight(string)-default('50%)**: height in header to respond with closing or opening header during a scroll. 
3. **offsetFromTop(number)-default(_20 for android_ _24 for ios_,_0 when hasNavBar is false_)**: offset to from top when collapsed
 to manage situations such as when there is no navbar,or you wish to keep a part of the header showing when collapsed.
4. **hasNavBar(bool)-default(true)** helps with offsetFromTop for determining offset for status bar of device.
#### Tabs:
Parent Component to manage tabs for collapsible
 <br/> **Props** 
1. **routes(Array of Routes (_{icon:{name:string,type:string, ...propsFrom 
[react-native-elements icon](https://react-native-training.github.io/react-native-elements/API/icons/)}_))-default([])**:

2. **iconStyle (object)-default(_{ fontSize: 18, color:#FFFFFF }_)** :style for icons
3. **activeIconStyle (object)-default(_{ fontSize: 18, color:#FFFFFF }_)** :style for active icons
4. **inactiveIconStyle (object)-default(_{ fontSize: 18, color:#FFFFFF }_)** :style for in-active icons
5. **labelStyle (object)-default(_{ fontSize: 12, color:#FFFFFF }_)** :style for in-active icons
6. **indicatorStyle (object)-default(_{backgroundColor: #FFFFFF }_)** :style for in-active icons
7. **swipeEnabled (bool)-default(_true_)** : enable/disable tab swipe navigation
8. **tabsProps (object)-default(_undefined_)** : props for tabs, same as props for [tabViewAnimated](https://github.com/react-native-community/react-native-tab-view#tabviewanimated-)
9. **All props from the excellent [react-native-tab-view tabBar](https://github.com/react-native-community/react-native-tab-view#tabbar-)**

#### TabHeader:
Header component for tabs <br/>
**children:** <br/>
react component for header <br/>
**Props:** <br/>
1. **styles(Object)-default(_{ backgroundColor: #FFFFFF, flex: 1 }_)**:
style for header component;
2. **onHeaderContentLayout(func))**:function to return layout props for header content without tab dimensions
3.**onLayout(func))**:function to return layout props for tabheader

#### Tab:
Tab component to display tab content <br/> _note this is a pure component and will update 
contents when hasScrollable changes to improve performance: it should generally work well_
**Props**
1. **key(string)**: key same as key in routes
2. **hasScrollable(boolean)-default(_true_)**:  set this to fault when the tab content is not a scrollable
to properly align items.


#### Scrollable(ScrollableComponent:React Native Componet):
Method to create a scrollable component to control collapsible header

#### FlatList:
Scrollable flatlist component from Scrollable() method, same as [RN FlatList](https://facebook.github.io/react-native/docs/flatlist.html)

#### ScrollView:
Scrollable Scrollview component from Scrollable() method, same as [RN ScrollView](https://facebook.github.io/react-native/docs/scrollview.html)
   
#### Motivation:
Needed an easy way to implement collapsible tab headers and headers for a project
and could not find one .. so I created this to ease the burden for myself and perhaps others.

#### Acknowledgments:
Indeed I could not have achieved this without the excellent contributions from others such as
1. @janicduplessis for his excellent medium [post](https://medium.com/appandflow/react-native-collapsible-navbar-e51a049b560a)
2. brilliant tab view from [react-native-community](https://github.com/react-native-community/react-native-tab-view)
3. awesome icon implementation and components from [react-native-elements](https://github.com/react-native-training/react-native-elements)
4. [recompose](https://github.com/acdlite/recompose) - so cool! 
5. [React](https://reactjs.org/) and 
[ReactNative](https://facebook.github.io/react-native/) - just makes a lot of sense :)

#### Contributions:
PR's are very welcome

#### Todo
1. Improve docs perhaps include GIF screenshots
2. add examples to expo.
3. Improve on components to include propType definitions
