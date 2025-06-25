import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

export const styles = StyleSheet.create({
  icon: {
    backgroundColor: colors.white,
    opacity: 0.8,
    borderRadius: 100,
    width: 40,
    height: 40,
    borderColor: colors.secondaryGrey,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 50,
  },
});
