import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import NotificationIcon from '../../assets/svg/notifications.svg';
import colors from '../../constants/colors';
import Logo from '../../components/Logo';
import {Fonts} from '../../constants/fonts';

const categories = [
  {
    icon: require('../../assets/png/information_images/emergency.png'),
    label: 'Transportation',
  },
  {
    icon: require('../../assets/png/information_images/emergency.png'),
    label: 'Emergencies',
  },
  {
    icon: require('../../assets/png/information_images/emergency.png'),
    label: 'Translators',
  },
  {
    icon: require('../../assets/png/information_images/emergency.png'),
    label: 'Guidance',
  },
];

const transportOptions = [
  {
    id: 1,
    title: 'Train Booking',
    image: require('../../assets/png/information_images/emergency.png'),
  },
  {
    id: 2,
    title: 'Train Booking',
    image: require('../../assets/png/information_images/emergency.png'),
  },
  {
    id: 3,
    title: 'Train Booking',
    image: require('../../assets/png/information_images/emergency.png'),
  },
  {
    id: 4,
    title: 'Train Booking',
    image: require('../../assets/png/information_images/emergency.png'),
  },
  {
    id: 5,
    title: 'Train Booking',
    image: require('../../assets/png/information_images/emergency.png'),
  },
  {
    id: 6,
    title: 'Train Booking',
    image: require('../../assets/png/information_images/emergency.png'),
  },
];

const HealthCare = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerRight}>
        <Logo />
        <NotificationIcon width={25} height={25} fill={colors.black} />
      </View>

      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categoriesRow}>
        {categories.map((item, index) => (
          <View style={{alignItems: 'center'}}>
            <View key={index} style={styles.categoryItem}>
              <Image source={item.icon} style={styles.cardImage} />
            </View>
            <Text style={styles.categoryLabel}>{item.label}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Transportation</Text>
      {transportOptions.map(option => (
        <View key={option.id} style={styles.card}>
          <Image source={option.image} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{option.title}</Text>
            <Text style={styles.cardSubtitle}>
              Fast, reliable train reservations at your fingertips.
            </Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.contactBtn}>
                <Text style={styles.contactText}>Contact Now</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bookBtn}>
                <Text style={styles.bookText}>Book Online</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default HealthCare;

const styles = StyleSheet.create({
  container: {
    paddingTop: '15%',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 17,
    fontFamily: Fonts.Manrope.SemiBold,
    marginTop: 20,
    marginBottom: 10,
  },
  categoriesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    borderRadius: 20,
    backgroundColor: colors.bottomTabBorderColor,
  },
  categoryLabel: {
    marginTop: 4,
    fontSize: 12,
    fontFamily: Fonts.Manrope.SemiBold,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fdfdfd',
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    gap: 10,
  },
  cardImage: {
    width: 53,
    height: 70,
    resizeMode: 'contain',
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#666',
    marginVertical: 4,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  contactBtn: {
    backgroundColor: '#2a8f35',
    padding: 6,
    borderRadius: 6,
  },
  contactText: {
    color: '#fff',
    fontSize: 12,
  },
  bookBtn: {
    borderColor: '#2a8f35',
    borderWidth: 1,
    padding: 6,
    borderRadius: 6,
  },
  bookText: {
    fontSize: 12,
    color: '#2a8f35',
  },
});
