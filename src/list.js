import { Animated, FlatList } from 'react-native';
import createScrollable from './scrollable';

const AnimatedList = Animated.createAnimatedComponent(FlatList);
export default createScrollable(AnimatedList);
