import {
  View,
  Text,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import BottomTabIcon from './BottomTabIcon';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import colors from '../constants/colors';

const CustomButtonTab = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const {width} = useWindowDimensions();
  const MARGIN = 0;
  const TAB_BAR_WIDTH = width - 2 * MARGIN;
  const TAB_WIDTH = TAB_BAR_WIDTH / state.routes.length;

  const translateAnimation = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withTiming(TAB_WIDTH * state.index)}],
    };
  });

  return (
    <View style={[styles.tabContainer, {width: TAB_BAR_WIDTH, bottom: MARGIN}]}>
      <Animated.View
        style={[
          styles.slidingTabContainer,
          {width: TAB_WIDTH},
          translateAnimation,
        ]}>
        <View style={styles.slidingTab} />
      </Animated.View>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, {merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <View style={styles.contentContainer}>
              <BottomTabIcon route={route.name} isFocused={isFocused} />
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default CustomButtonTab;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    borderTopColor: colors.bottomTabBorderColor,
    borderTopWidth: 1,
    margin: 0,
    height: 70,
    position: 'relative',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  slidingTab: {
    width: '100%',
    height: '100%',
    borderTopColor: colors.primaryGreen,
    borderTopWidth: 2,
  },
  slidingTabContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
