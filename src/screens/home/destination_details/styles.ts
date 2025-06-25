import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import {Fonts} from '../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  imageContainer: {
    width: '100%',
    height: '50%',
    position: 'relative',
    overflow: 'hidden',
  },
  eventImage: {width: '100%', height: '100%'},
  topIcons: {
    position: 'absolute',
    top: 45,
    left: 15,
    right: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    backgroundColor: colors.bottomTabBorderColor,
    opacity: 0.8,
    borderRadius: 100,
    width: 40,
    height: 40,
    borderColor: colors.secondaryGrey,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsContainer: {
    paddingHorizontal: 16,
    paddingTop: 15,
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: colors.backgroundColor,
  },

  title: {
    fontSize: 22,
    fontFamily: Fonts.Manrope.Bold,
    color: colors.primaryGreen,
    marginBottom: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingStar: {
    fontSize: 15,
    fontFamily: Fonts.Manrope.SemiBold,
    color: colors.black,
  },
  reviewCount: {
    marginLeft: 8,
    color: colors.black,
  },
  description: {
    fontSize: 15,
    color: colors.textColor,
    marginBottom: 16,
    textAlign: 'justify',
  },
  locationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  locationLabel: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  openMap: {
    color: 'green',
    fontWeight: '600',
  },
  pictureTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
  },
  commentContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: colors.textInputBarColor,
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 15,
    marginVertical: 10,
  },

  commentInput: {
    paddingVertical: 8,
    color: colors.black,
  },

  postButton: {
    color: colors.primaryGreen,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  userProfileAvatar: {
    width: 45,
    height: 45,
    borderRadius: 45,
  },
  addCommentSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    paddingBottom: 30,
  },
  detailsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reviewerAvatar: {
    width: 25,
    height: 25,
    borderRadius: 25,
  },
  reviewerAvatarBorder: {
    width: 26,
    height: 26,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: colors.white,
    backgroundColor: colors.white,
    marginRight: -5,
  },
  reviewerAvatarSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
