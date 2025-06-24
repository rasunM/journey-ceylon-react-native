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
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import colors from '../../constants/colors';
import Logo from '../../components/Logo';
import NotificationIcon from '../../assets/svg/notifications.svg';
import SearchIcon from '../../assets/svg/search.svg';
import FavouriteIcon from '../../assets/svg/favourite.svg';
import IconWrapper from '../../components/IconWrapper';
import CustomSearchBar from '../../components/CustomSearchBar';
import {Fonts} from '../../constants/fonts';

const categories = [
  {title: 'Historical', image: require('../../assets/png/destination.png')},
  {title: 'Beaches', image: require('../../assets/png/destination.png')},
  {title: 'Mountains', image: require('../../assets/png/destination.png')},
  {title: 'Cities', image: require('../../assets/png/destination.png')},
  {title: 'Cities', image: require('../../assets/png/destination.png')},
];

const places = [
  {
    title: 'Ambuluwawa Tower',
    location: 'Gampola, Sri Lanka',
    image: require('../../assets/png/destination.png'),
  },
  {
    title: 'Mirissa Beach',
    location: 'Matara, Sri Lanka',
    image: require('../../assets/png/destination.png'),
  },
  {
    title: 'Temple',
    location: 'Sri Lanka',
    image: require('../../assets/png/destination.png'),
  },
  {
    title: 'Train Ride',
    location: 'Sri Lanka',
    image: require('../../assets/png/destination.png'),
  },
  {
    title: 'Train Ride',
    location: 'Sri Lanka',
    image: require('../../assets/png/destination.png'),
  },
  {
    title: 'Train Ride',
    location: 'Sri Lanka',
    image: require('../../assets/png/destination.png'),
  },
];

const HomeScreen = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Logo />
        <IconWrapper
          Icon={NotificationIcon}
          width={25}
          height={25}
          fill={colors.black}
          style={{
            backgroundColor: colors.bottomTabBorderColor,
            borderRadius: 100,
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </View>

      {/* Search */}
      <CustomSearchBar />

      {/* Categories */}
      <View style={styles.categoriesRow}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <Text style={styles.scrollAll}>Scroll all</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesScroll}>
        {categories.map((item, index) => (
          <View key={index} style={styles.categoryItem}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, styles.tabActive]}>
          <Text style={styles.tabTextActive}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Recommended</Text>
        </TouchableOpacity>
      </View>

      {/* Places Grid */}
      <FlatList
        data={places}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.placesGrid}
        renderItem={({item}) => (
          <View style={styles.placeCard}>
            <Image source={item.image} style={styles.placeImage} />
            <View style={styles.heartIcon}>
              <FavouriteIcon width={20} height={20} fill={colors.black} />
            </View>
            <Text style={styles.placeTitle}>{item.title}</Text>
            <Text style={styles.placeLocation}>{item.location}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
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
    backgroundColor: '#f1f1f1',
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
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  scrollAll: {
    color: 'green',
    fontWeight: '500',
  },
  categoriesScroll: {
    height: 180,
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
  },
  tabActive: {
    backgroundColor: '#fff',
    elevation: 2,
  },
  tabText: {
    fontSize: 14,
    color: colors.black,
  },
  tabTextActive: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  placesGrid: {
    paddingBottom: 20,
  },
  placeCard: {
    width: '48%',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
  },
  placeImage: {
    width: '100%',
    height: 120,
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
    fontWeight: '600',
  },
  placeLocation: {
    marginHorizontal: 8,
    marginBottom: 8,
    fontSize: 12,
    color: '#555',
  },
});
