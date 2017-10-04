import { Animated, ScrollView } from 'react-native';
import createScrollable from './scrollable';

const AnimatedList = Animated.createAnimatedComponent(ScrollView);
export default createScrollable(AnimatedList);
