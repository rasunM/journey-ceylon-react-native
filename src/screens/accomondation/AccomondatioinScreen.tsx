import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import CategoryIconCard from '../../components/CategoryIconCard';
import ListingCard from '../../components/ListingCard';
import NotificationIcon from '../../assets/svg/notifications.svg';
import colors from '../../constants/colors';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {
  BottomTabParamList,
  RootStackParamList,
} from '../../types/navigation_types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Logo from '../../components/Logo';

const categories = [
  {
    label: 'Villa',
    icon: require('../../assets/png/information_images/villa.png'),
  },
  {
    label: 'Hotel',
    icon: require('../../assets/png/information_images/villa.png'),
  },
  {
    label: 'Apartment',
    icon: require('../../assets/png/information_images/villa.png'),
  },
  {
    label: 'Guest',
    icon: require('../../assets/png/information_images/villa.png'),
  },
  {
    label: 'Hospital',
    icon: require('../../assets/png/information_images/villa.png'),
  },
  {
    label: 'Pharmacy',
    icon: require('../../assets/png/information_images/villa.png'),
  },
];

type NavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParamList, 'Accomondation'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const AccomondationScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Logo />
        <NotificationIcon width={25} height={25} fill={colors.black} />
      </View>

      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categoriesContainer}>
        {categories.map((cat, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('CategorySingle')}>
            <CategoryIconCard key={index} label={cat.label} icon={cat.icon} />
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Recent Accommodation</Text>
      <FlatList
        data={[
          {
            name: 'Cinnamon Grand',
            rating: 4.6,
            location: 'Colombo, Sri Lanka',
            type: 'Hotel',
            image: require('../../assets/png/destination.png'),
          },
          {
            name: 'Avani Kalutara Resort',
            rating: 4.2,
            location: 'Kalutara, Sri Lanka',
            type: 'Resort',
            image: require('../../assets/png/destination.png'),
          },
        ]}
        keyExtractor={item => item.name}
        horizontal
        renderItem={({item}) => <ListingCard {...item} />}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.sectionTitle}>Recent Healthcare</Text>
      <FlatList
        style={{marginBottom: 80}}
        data={[
          {
            name: 'Cinnamon Grand',
            rating: 4.6,
            location: 'Colombo, Sri Lanka',
            type: 'Hotel',
            image: require('../../assets/png/destination.png'),
          },
          {
            name: 'Avani Kalutara Resort',
            rating: 4.2,
            location: 'Kalutara, Sri Lanka',
            type: 'Resort',
            image: require('../../assets/png/destination.png'),
          },
          {
            name: 'Cinnamon Grand2',
            rating: 4.6,
            location: 'Colombo, Sri Lanka',
            type: 'Hotel',
            image: require('../../assets/png/destination.png'),
          },
          {
            name: 'Avani Kalutara Resort2',
            rating: 4.2,
            location: 'Kalutara, Sri Lanka',
            type: 'Resort',
            image: require('../../assets/png/destination.png'),
          },
        ]}
        keyExtractor={item => item.name}
        horizontal
        renderItem={({item}) => <ListingCard {...item} />}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

export default AccomondationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 50,
    backgroundColor: colors.backgroundColor,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c7c53',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    shadowColor: colors.black,
    elevation: 2,
    borderRadius: 10,
    padding: 10,
  },
});
