import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import { Fonts } from "../../constants/fonts";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
      paddingHorizontal: 16,
      paddingVertical: '10%',
    },
    header: {
      flexDirection: 'row',
      marginTop: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    searchContainer: {
      marginTop: 16,
      flexDirection: 'row',
      backgroundColor: colors.white,
      borderRadius: 12,
      alignItems: 'center',
      paddingHorizontal: 12,
      height: 45,
    },
    searchInput: {
      marginLeft: 8,
      flex: 1,
    },
    categoriesRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 22,
      marginBottom: 20,
      alignItems: 'center',
    },
    sectionTitle: {
      fontSize: 17,
      fontFamily: Fonts.Manrope.SemiBold,
    },
    scrollAll: {
      color: colors.primaryGreen,
      fontFamily: Fonts.Manrope.SemiBold,
    },
    categoriesScroll: {
      height: 100,
      padding: 0,
    },
    categoryItem: {
      width: 90,
      alignItems: 'center',
      marginRight: 0,
    },
    categoryImage: {
      width: 70,
      height: 70,
      borderRadius: 20,
      marginBottom: 6,
    },
    categoryText: {
      fontSize: 12,
      color: colors.black,
      fontFamily: Fonts.Manrope.SemiBold,
    },
    tabs: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 16,
      backgroundColor: colors.backgroundColor,
      borderRadius: 20,
      padding: 4,
      elevation: 5,
      borderWidth: 3,
      borderColor: colors.backgroundColor,
      shadowColor: colors.black,
      height: 60,
      shadowOffset: {
        width: 0,
        height: 1,
      },
    },
    tab: {
      paddingVertical: 6,
      paddingHorizontal: 18,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabActive: {
      backgroundColor: colors.white,
      elevation: 2,
    },
    tabText: {
      fontSize: 14,
      color: colors.black,
      fontFamily: Fonts.Manrope.Bold,
    },
    tabTextActive: {
      fontSize: 14,
      fontFamily: Fonts.Manrope.Bold,
      color: colors.primaryGreen,
    },
    placesGrid: {
      paddingBottom: 20,
    },
    placeCard: {
      width: '48%',
      marginBottom: 16,
      backgroundColor: colors.white,
      borderRadius: 12,
      overflow: 'hidden',
      elevation: 2,
    },
    placeImage: {
      width: '100%',
      height: 176,
    },
    heartIcon: {
      position: 'absolute',
      top: 8,
      right: 8,
      backgroundColor: colors.white,
      padding: 6,
      borderRadius: 20,
    },
    placeTitle: {
      marginTop: 8,
      marginHorizontal: 8,
      fontFamily: Fonts.Manrope.ExtraBold,
      fontSize: 15,
    },
    placeLocation: {
      marginHorizontal: 8,
      marginBottom: 8,
      fontSize: 12,
      color: colors.black,
      fontFamily: Fonts.Manrope.SemiBold,
    },
  });