import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import ShareIcon from '../assets/svg/share.svg';
import colors from '../constants/colors';
import HeartIcon from '../assets/svg/favourite.svg';
import LocationIcon from '../assets/svg/location.svg';
import StarIcon from '../assets/svg/star.svg';

const imageSource = require('../assets/png/destination.png');

const CategoryCard = () => {
  return (
    <View style={styles.card}>
      {/* Left Image */}
      <Image source={imageSource} style={styles.image} />

      {/* Right Content */}
      <View style={styles.content}>
        <View style={styles.topRow}>
          <Text style={styles.title}>Fort Bazaar Villa</Text>
          <TouchableOpacity>
            <HeartIcon width={25} height={25} fill={colors.black} />
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>boutique villa inside Galle Fort</Text>

        <View style={styles.locationRow}>
          <LocationIcon width={25} height={25} fill={colors.black} />
          <Text style={styles.location}>Galle, Sri Lanka</Text>
        </View>

        <View style={styles.ratingRow}>
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <StarIcon key={i} width={25} height={25} fill={colors.yellow} />
            ))}
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Booking Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 110,
    height: '100%',
    borderRadius: 10,
  },
  content: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    flexShrink: 1,
  },
  subtitle: {
    fontSize: 13,
    color: '#555',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  location: {
    fontSize: 12,
    color: 'gray',
    marginLeft: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: 'green',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});
