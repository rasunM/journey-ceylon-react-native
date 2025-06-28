import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import {Fonts} from '../constants/fonts';

interface Props {
  label: string;
  icon: any;
}

const CategoryIconCard: React.FC<Props> = ({label, icon}) => {
  return (
    <View style={styles.card}>
      <View
        style={{
          width: 80,
          height: 80,
          backgroundColor: colors.categroryCardColor,
          alignItems: 'center',
          justifyContent: 'center',

          borderRadius: 50,
        }}>
        <Image source={icon} style={styles.icon} />
      </View>
      <Text
        style={{
          marginTop: 5,
          fontFamily: Fonts.Manrope.SemiBold,
          fontSize: 12,
        }}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    margin: 10,
    width: 80,
    justifyContent: 'center',
  },
  icon: {
    width: 51,
    height: 51,
    borderRadius: 50,
  },
});

export default CategoryIconCard;
