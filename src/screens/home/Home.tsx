import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import colors from '../../constants/colors';
import Logo from '../../components/Logo';
import NotificationIcon from '../../assets/svg/notifications.svg';
import FavouriteIcon from '../../assets/svg/favourite.svg';
import IconWrapper from '../../components/IconWrapper';
import CustomSearchBar from '../../components/CustomSearchBar';
import {styles} from './styles';
import {categories, places} from '../../firebase/home/auth_firestore_handlers';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {
  BottomTabParamList,
  RootStackParamList,
} from '../../types/navigation_types';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

type NavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParamList, 'Home'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const HomeScreen = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const navigation = useNavigation<NavigationProp>();
  const [selectedTab, setSelectedTab] = useState<
    'All' | 'Popular' | 'Recommended'
  >('All');

  const filteredPlaces = places.filter(place => {
    if (selectedTab === 'All') return true;
    return place.type === selectedTab;
  });

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

      {/* Entire content as FlatList */}
      <FlatList
        data={filteredPlaces}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.placesGrid}
        ListHeaderComponent={
          <>
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
              {['All', 'Popular', 'Recommended'].map(tab => (
                <TouchableOpacity
                  key={tab}
                  style={[styles.tab, selectedTab === tab && styles.tabActive]}
                  onPress={() =>
                    setSelectedTab(tab as 'All' | 'Popular' | 'Recommended')
                  }>
                  <Text
                    style={
                      selectedTab === tab
                        ? styles.tabTextActive
                        : styles.tabText
                    }>
                    {tab}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        }
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.placeCard}
            onPress={() => {
              navigation.navigate('DestinationDetails');
            }}>
            <Image source={item.image} style={styles.placeImage} />
            <View style={styles.heartIcon}>
              <FavouriteIcon width={20} height={20} fill={colors.black} />
            </View>
            <Text style={styles.placeTitle}>{item.title}</Text>
            <Text style={styles.placeLocation}>{item.location}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
