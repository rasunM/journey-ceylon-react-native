import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import SearchIcon from '../assets/svg/search.svg';
import colors from '../constants/colors';
import {Fonts} from '../constants/fonts';

const CustomSearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <SearchIcon width={30} height={30} fill={colors.secondaryGrey} />
      <TextInput
        placeholder="Search Destination, Place"
        style={styles.searchInput}
        placeholderTextColor={colors.secondaryGrey}
      />
    </View>
  );
};

export default CustomSearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 16,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.textInputBarColor,
    borderRadius: 100,
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 60,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
    fontFamily: Fonts.Manrope.Medium,
  },
});
