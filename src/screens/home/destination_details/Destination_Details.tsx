import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../../constants/colors';
import BackIcon from '../../../assets/svg/back.svg';
import ShareIcon from '../../../assets/svg/share.svg';
import IconWrapper from '../../../components/IconWrapper';
import {styles} from './styles';

const imageSource = require('../../../assets/png/destination.png');

const DestinationDetails = () => {
  const pictureData = [1, 2, 3, 4]; // Using same image for all

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Image */}
      <View style={styles.imageContainer}>
        <Image
          source={imageSource}
          style={styles.eventImage}
          resizeMode="cover"
        />
        <View style={styles.topIcons}>
          <TouchableOpacity style={[styles.icon, {paddingLeft: 10}]}>
            <BackIcon width={25} height={25} fill={colors.black} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <ShareIcon width={25} height={25} fill={colors.black} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Details Section */}
      <ScrollView style={styles.detailsContainer}>
        <View style={styles.detailsHeader}>
          <View>
            <Text style={styles.title}>Ambuluwawa Tower</Text>

            {/* Ratings */}
            <View style={styles.ratingRow}>
              <Text style={styles.ratingStar}>⭐ 4.9</Text>
              <Text style={styles.reviewCount}>(2536 reviews)</Text>
            </View>
          </View>
          <View style={styles.reviewerAvatarSection}>
            <View style={styles.reviewerAvatarBorder}>
              <Image source={imageSource} style={styles.reviewerAvatar} />
            </View>
            <View style={styles.reviewerAvatarBorder}>
              <Image source={imageSource} style={styles.reviewerAvatar} />
            </View>
            <View style={styles.reviewerAvatarBorder}>
              <Image source={imageSource} style={styles.reviewerAvatar} />
            </View>
          </View>
        </View>

        {/* Description */}
        <Text style={styles.description}>
          Perched atop a mountain in Gampola, Ambuluwawa is a unique
          multi-religious site and biodiversity complex offering breathtaking
          360° panoramic views. The spiral tower is famous for its narrow
          winding staircase that climbs high into the clouds, making it a
          thrilling spot for adventurers and photographers alike. It’s a
          peaceful escape blending culture, nature, and stunning scenery.
        </Text>

        {/* Location */}
        <View style={styles.locationRow}>
          <Text style={styles.locationLabel}>Location</Text>
          <TouchableOpacity>
            <Text style={styles.openMap}>open on map ➜</Text>
          </TouchableOpacity>
        </View>

        {/* Picture Collection */}
        <Text style={styles.pictureTitle}>Picture collection</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={pictureData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={() => (
            <Image source={imageSource} style={styles.thumbnail} />
          )}
        />
        <View style={styles.addCommentSection}>
          <Image source={imageSource} style={styles.userProfileAvatar} />
          <View style={styles.commentContainer}>
            <TextInput
              style={styles.commentInput}
              placeholder="Add a comment"
              placeholderTextColor={colors.black}
            />
            <TouchableOpacity>
              <Text style={styles.postButton}>POST</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DestinationDetails;
