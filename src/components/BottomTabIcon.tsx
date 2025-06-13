import {View} from 'react-native';
import React from 'react';
import HomeIcon from '../assets/svg/home.svg';
import AccomondationIcon from '../assets/svg/accomondation.svg';
import HealthCareIcon from '../assets/svg/healthcare.svg';
import ShoppingIcon from '../assets/svg/shopping.svg';
import ProfileIcon from '../assets/svg/profile.svg';
import colors from '../constants/colors';

type Props = {
  route: string;
  isFocused: boolean;
};

const BottomTabIcon = ({route, isFocused}: Props) => {
  const renderIcon = (route: string, isFocused: boolean) => {
    let height: number = 34;
    let width: number = 34;
    switch (route) {
      case 'Home':
        return (
          <HomeIcon
            height={height}
            width={width}
            fill={isFocused ? colors.primaryGreen : colors.black}
          />
        );

      case 'Profile':
        return (
          <ProfileIcon
            height={height}
            width={width}
            fill={isFocused ? colors.primaryGreen : colors.black}
          />
        );
      case 'Accomondation':
        return (
          <AccomondationIcon
            height={height}
            width={width}
            fill={isFocused ? colors.primaryGreen : colors.black}
          />
        );
      case 'HealthCare':
        return (
          <HealthCareIcon
            height={height}
            width={width}
            fill={isFocused ? colors.primaryGreen : colors.black}
          />
        );
      case 'Shopping':
        return (
          <ShoppingIcon
            height={height}
            width={width}
            fill={isFocused ? colors.primaryGreen : colors.black}
          />
        );
      default:
        return null;
    }
  };
  return <View>{renderIcon(route, isFocused)}</View>;
};

export default BottomTabIcon;
