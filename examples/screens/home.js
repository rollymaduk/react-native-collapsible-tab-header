// @flow
import React from 'react';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';
import { defaultProps } from 'recompose';
import { Button } from 'react-native-elements';
import styles from '../style';

const Component = ({ style }: {style: Object}) => (
  <View style={[style.homeContainer]}>
    <Button
      raised
      containerViewStyle={{ marginBottom: 10 }}
      onPress={() => Actions.tabbed()}
      icon={{ name: 'home', size: 32 }}
      buttonStyle={{ backgroundColor: '#ff4f00' }}
      textStyle={{ textAlign: 'center' }}
      title={'Tabbed Collapsible'}
    />

    <Button
      raised
      onPress={() => Actions.notTabbed()}
      icon={{ name: 'home', size: 32 }}
      buttonStyle={{ backgroundColor: '#22E0D1' }}
      textStyle={{ textAlign: 'center' }}
      title={'Not Tabbed Collapsible'}
    />
  </View>
);

export default defaultProps({
  style: styles,
})(Component);

