import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CloseButton from '../assets/svg/close.svg';
import React from 'react';
import colors from '../constants/colors';
import {Fonts} from '../constants/fonts';

type Props = {
  text: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  isFocused?: boolean;
};

const CustomTextField = ({
  text,
  onChangeText,
  placeholder,
  secureTextEntry,
  onFocus,
  onBlur,
  isFocused = false,
}: Props) => {
  return (
    <View
      style={[
        styles.container,
        {borderColor: isFocused ? colors.primaryGreen : colors.secondaryGrey},
      ]}>
      <TextInput
        value={text}
        underlineColorAndroid="transparent"
        onChangeText={onChangeText}
        style={styles.textInputBar}
        placeholder={placeholder}
        placeholderTextColor={colors.secondaryGrey}
        secureTextEntry={secureTextEntry}
        onFocus={onFocus}
        onBlur={onBlur}
      />

      <TouchableOpacity
        onPress={() => {
          onChangeText('');
        }}>
        <CloseButton
          width={20}
          height={20}
          fill={text.length > 0 ? colors.secondaryGrey : colors.backgroundColor}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomTextField;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    height: 58,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: colors.secondaryGrey,
    backgroundColor: colors.white,
  },
  textInputBar: {
    width: '90%',
    height: '80%',
    fontFamily: Fonts.Manrope.Regular,
    color: colors.textInputBarFontColor,
  },
});
