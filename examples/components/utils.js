// @flow
import React from 'react';
import { ListItem } from 'react-native-elements';
import { compose, withHandlers, defaultProps, withProps } from 'recompose';
import { DataProvider, LayoutProvider, RecyclerListView } from 'recyclerlistview';
import { Dimensions } from 'react-native';
import { isArrayLike } from 'lodash';
import PropTypes from 'prop-types';


const VERT_TYPE = 'verticalType';
const HORIZ_TYPE = 'horizontalType';
const DEFAULT_DATA_PROVIDER = new DataProvider((r1, r2) => (r1 !== r2));

/* eslint react/prop-types:0 */
const Component = ({ layoutProvider, myDataProvider,
  rowRenderer, isHorizontal, onEndReached, externalScrollView,
}: any) => (
  <RecyclerListView
    externalScrollView={externalScrollView}
    canChangeSize
    onEndReached={onEndReached}
    onEndReachedThreshold={320}
    isHorizontal={isHorizontal}
    rowRenderer={rowRenderer}
    layoutProvider={layoutProvider}
    dataProvider={myDataProvider}
  />
);
/* eslint react/forbid-prop-types:0 */
Component.propTypes = {
  onEndReached: PropTypes.func,
  height: PropTypes.number,
  width: PropTypes.number,
  data: PropTypes.any,
  externalScrollView: PropTypes.any,
};

export default compose(
  defaultProps({
    data: [],
    isHorizontal: false,
  }),
  withProps(({ data, width, height, isHorizontal, dataProvider }) => {
    const myDataProvider = (dataProvider) || DEFAULT_DATA_PROVIDER.cloneWithRows(data);
    return ({
      myDataProvider,
      layoutProvider: new LayoutProvider(
        index => ((isHorizontal) ? HORIZ_TYPE : VERT_TYPE),
        (type, dim) => {
          dim.width = Dimensions.get('window').width;
          dim.height = height || 25;
        }),
    });
  },
  ),
  withHandlers({
    rowRenderer: rest => (type, data) => (
      <ListItem
        subtitle={data.subtitle}
        title={data.title}
      />),
  }),
)(Component);
