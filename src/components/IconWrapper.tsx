import React from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';

interface IconWrapperProps {
  Icon: React.FC<SvgProps>;
  width?: number;
  height?: number;
  fill?: string;
  style?: StyleProp<ViewStyle>;
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  Icon,
  width = 24,
  height = 24,
  fill = '#000',
  style,
}) => {
  return (
    <View style={style}>
      <Icon width={width} height={height} fill={fill} />
    </View>
  );
};

export default IconWrapper;
