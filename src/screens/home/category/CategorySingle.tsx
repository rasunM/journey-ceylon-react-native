import React from 'react';
import {ScrollView, View, SafeAreaView, TouchableOpacity} from 'react-native';
import CategoryCard from '../../../components/CategoryCard';
import BackButton from '../../../assets/svg/back.svg';
import NotificationIcon from '../../../assets/svg/notifications.svg';
import colors from '../../../constants/colors';
import {styles} from './styles';

const CategorySingle = () => {
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={[styles.icon, {paddingLeft: 10}]}>
          <BackButton width={25} height={25} fill={colors.black} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <NotificationIcon width={25} height={25} fill={colors.black} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{paddingVertical: 10}}>
          {[1, 2, 3, 4].map((_, index) => (
            <CategoryCard key={index} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategorySingle;
