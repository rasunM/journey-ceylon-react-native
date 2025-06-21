import React, {useRef, useEffect} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import colors from '../constants/colors';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  inputRef: React.RefObject<TextInput | null>;
  onKeyPress?: () => void;
};

const DigitInputBox: React.FC<Props> = ({value, onChangeText, inputRef}) => {
  return (
    <TextInput
      ref={inputRef}
      maxLength={1}
      keyboardType="number-pad"
      style={styles.container}
      textAlign="center"
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default DigitInputBox;

const styles = StyleSheet.create({
  container: {
    width: 55,
    height: 55,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.textInputBarColor,
    fontSize: 20,
    color: colors.black,
    backgroundColor: colors.white,
  },
});
