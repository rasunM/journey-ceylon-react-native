import {View, Text, Image} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../../types/navigation_types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Onboarding from 'react-native-onboarding-swiper';
import {Fonts} from '../../constants/fonts';
import colors from '../../constants/colors';

type OnboardingScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Onboarding'
>;
const OnBoarding = ({navigation}: OnboardingScreenProps) => {
  return (
    <Onboarding
      onDone={() => {
        navigation.navigate('HomeTab');
      }}
      onSkip={() => {
        navigation.navigate('HomeTab');
      }}
      pages={[
        {
          backgroundColor: colors.white,
          image: (
            <Image
              source={require('../../assets/png/onboarding1.png')}
              style={{width: 300, height: 450, marginBottom: -50}}
            />
          ),
          title: 'Explore the Magic of Sri Lanka',
          titleStyles: {
            fontSize: 25,
            fontFamily: Fonts.Manrope.SemiBold,
            color: colors.primaryGreen,
            paddingHorizontal: '15%',
          },
          subtitle:
            'A land of breathtaking landscapes, ancient heritage, and vibrant culture.',
          subTitleStyles: {
            fontSize: 18,
            fontFamily: Fonts.Manrope.Medium,
            color: colors.black,
            paddingHorizontal: '5%',
          },
        },
        {
          backgroundColor: colors.white,
          image: (
            <Image
              source={require('../../assets/png/onboarding2.png')}
              style={{width: 300, height: 450, marginBottom: -20}}
            />
          ),
          title: 'Smart Travel, Just for You',
          titleStyles: {
            fontSize: 25,
            fontFamily: Fonts.Manrope.SemiBold,
            color: colors.primaryGreen,
            paddingHorizontal: '7%',
          },
          subtitle:
            'Your all-in-one guide to explore, plan, and enjoy Sri Lanka.',
          subTitleStyles: {
            fontSize: 18,
            fontFamily: Fonts.Manrope.Medium,
            color: colors.black,
            paddingHorizontal: '5%',
          },
        },
      ]}
    />
  );
};

export default OnBoarding;
