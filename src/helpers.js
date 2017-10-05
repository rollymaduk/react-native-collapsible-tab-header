// @flow
import { Animated, Dimensions, Platform } from 'react-native';

const WINDOW = 'window';

const getStatusBarHeight = () => ((Platform.OS === 'ios') ? 20 : 24);

// const STATUS_BAR_HEIGHT = Platform.select({ ios: 20, android: 24 });

const ScrollableMethods = class ScrollableMethods {
    _scrollValue=0;
    _clampedScrollValue=0;
    _offsetValue=0;
    _scrollEndTimer=null;

    momentumScrollEnd({ offsetAnim, height, collapseHeight }: any) {
      const toValue = this._scrollValue > height &&
        this._clampedScrollValue > collapseHeight
        ? this._offsetValue + height
        : this._offsetValue - height;

      Animated.timing(offsetAnim, {
        toValue,
        duration: 350,
        useNativeDriver: true,
      }).start();
    }
    scrollEndDrag({ offsetAnim, height }: any) {
      this._scrollEndTimer = setTimeout(() =>
        this.momentumScrollEnd({ offsetAnim, height }), 250);
    }

    momentumScrollBegin() {
      clearTimeout(this._scrollEndTimer);
    }

    onWillUnmount({ scrollAnim, offsetAnim }: any) {
      scrollAnim.removeAllListeners();
      offsetAnim.removeAllListeners();
    }

    onDidMount({
      scrollAnim,
      offsetAnim,
      height,
    }: any) {
      scrollAnim.addListener(({ value }) => {
        const diff = value - this._scrollValue;
        this._scrollValue = value;
        this._clampedScrollValue = Math.min(
          Math.max(this._clampedScrollValue + diff, 0),
          height,
        );
      });
      offsetAnim.addListener(({ value }) => {
        this._offsetValue = value;
      });
    }
};

export const getHeight = (height: string | number, base: ?number) => {
  const ratio = (base) ? parseFloat(height) / 100 : parseFloat(height);
  return (base) ? Math.round((base * ratio)) : ratio;
};

export const getDefaultValues = (height: string | number = '30%') => ({
  height,
  collapseHeight: '50%',
  hasNavBar: true,
  style: {},
  scrollAnim: new Animated.Value(0),
  offsetAnim: new Animated.Value(0),
  scrollable: new ScrollableMethods(),

});

export const getWithProps = ({ scrollAnim, offsetAnim, height,
  style, collapseHeight, offsetFromTop, hasNavBar }: any) => {
  const calculatedHeight = getHeight(height, Dimensions.get(WINDOW).height);
  const calculatedOffsetFromTop = (hasNavBar) ? 0 : offsetFromTop || getStatusBarHeight();
  return ({
    style: { ...{ flex: 1 }, ...style },
    height: calculatedHeight,
    offsetFromTop: calculatedOffsetFromTop,
    collapseHeight: (parseFloat(collapseHeight) / 100) * calculatedHeight,
    clampedScroll: Animated.diffClamp(Animated.add(
      scrollAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolateLeft: 'clamp',
      }), offsetAnim), 0, calculatedHeight),
  });
};

export const getTranslateY = (
  {
    clampedScroll,
    height,
    bottomOffset = 0,
    topOffset = 0,
  }: any,
) =>
  clampedScroll.interpolate({
    inputRange: [topOffset, height],
    outputRange: [topOffset, -(height - Math.round(bottomOffset))],
    extrapolate: 'clamp',
  });


export const getHeaderAndScenes = ({ children }: any) => {
  const result = { header: null, scenes: {} };
  children.map((child) => {
    if (child.type.displayName === 'CollapsibleTabHeader') {
      result.header = child;
    }
    if (child.type.displayName === 'CollapsibleTabItem') {
      if (child.key) {
        result.scenes[child.key] = child;
      }
    }
  });
  return result;
};
