import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../constants/colors';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  BottomTabParamList,
  RootStackParamList,
} from '../../types/navigation_types';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {
  googleSignOut,
  logoutUser,
} from '../../firebase/authentication/authhandlers';
import {useDispatch, useSelector} from 'react-redux';
import {clearAuth} from '../../redux/slices/authSlice';
import {RootState} from '../../redux/store';
import NotificationIcon from '../../assets/svg/notifications.svg';

type NavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParamList, 'Profile'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const navigation = useNavigation<NavigationProp>();
  const [activeTab, setActiveTab] = useState<'general' | 'other'>('general');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity style={styles.backIcon}>
          <NotificationIcon width={25} height={25} fill={colors.black} />
        </TouchableOpacity>
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/png/destination.png')}
          style={styles.avatar}
        />
        <Text style={styles.name}>Alexica Blix</Text>
        <Text style={styles.email}>alexicablix.uni@gmail.com</Text>

        <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.editText}>Edit profile</Text>
        </TouchableOpacity>

        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'general' && styles.tabActive,
            ]}
            onPress={() => setActiveTab('general')}>
            <Text
              style={
                activeTab === 'general' ? styles.tabTextActive : styles.tabText
              }>
              General
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'other' && styles.tabActive,
            ]}
            onPress={() => setActiveTab('other')}>
            <Text
              style={
                activeTab === 'other' ? styles.tabTextActive : styles.tabText
              }>
              Other Info
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'general' ? (
          <View style={styles.inputSection}>
            <View>
              <Text>Name</Text>
              <TextInput style={styles.input} placeholder="Name" />
            </View>
            <View>
              <Text>E mail address</Text>
              <TextInput style={styles.input} placeholder="Email address" />
            </View>
            <View>
              <Text>User Name</Text>
              <TextInput style={styles.input} placeholder="User name" />
            </View>
            <View>
              <Text>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
              />
            </View>
          </View>
        ) : (
          <View style={styles.otherSection}>
            <TouchableOpacity style={styles.itemRow}>
              <NotificationIcon width={25} height={25} fill={colors.black} />
              <Text style={styles.itemText}>Language</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemRow}>
              <NotificationIcon width={25} height={25} fill={colors.black} />
              <Text style={styles.itemText}>Privacy & policies</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemRow}>
              <NotificationIcon width={25} height={25} fill={colors.black} />
              <Text style={styles.itemText}>Help & support</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemRow}>
              <NotificationIcon width={25} height={25} fill={colors.black} />
              <Text style={styles.itemText}>About Us</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <TouchableOpacity style={styles.signoutBtn}>
        <Text style={styles.signoutText}>Sign out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    paddingTop: '10%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backIcon: {
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: 'green',
    fontWeight: '600',
    marginBottom: 10,
  },
  profileContainer: {
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  email: {
    fontSize: 13,
    color: '#555',
    marginBottom: 10,
  },
  editBtn: {
    backgroundColor: 'green',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginBottom: 16,
  },
  editText: {
    color: '#fff',
    fontSize: 12,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: '#fff',
  },
  tabText: {
    color: '#666',
  },
  tabTextActive: {
    color: 'green',
    fontWeight: '600',
  },
  inputSection: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 6,
    marginBottom: 12,
  },
  otherSection: {
    width: '100%',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  itemText: {
    fontSize: 14,
  },
  signoutBtn: {
    backgroundColor: 'green',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  signoutText: {
    color: '#fff',
    fontWeight: '600',
  },
});
