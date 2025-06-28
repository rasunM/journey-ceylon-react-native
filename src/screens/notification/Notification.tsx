import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import NotificationIcon from '../../assets/svg/notifications.svg';
import colors from '../../constants/colors';

const notifications = {
  new: [
    {
      id: '1',
      name: 'Alexica Blix',
      text: 'Commented on the post',
      time: '11 h',
    },
    {
      id: '2',
      name: 'Alexica Blix',
      text: 'Commented on the post',
      time: '11 h',
    },
    {
      id: '3',
      name: 'Alexica Blix',
      text: 'Commented on the post',
      time: '11 h',
    },
  ],
  earlier: [
    {
      id: '4',
      name: 'Alexica Blix',
      text: 'Commented on the post',
      time: '11 h',
    },
    {
      id: '5',
      name: 'Alexica Blix',
      text: 'Commented on the post',
      time: '11 h',
    },
    {
      id: '6',
      name: 'Alexica Blix',
      text: 'Commented on the post',
      time: '11 h',
    },
    {
      id: '7',
      name: 'Alexica Blix',
      text: 'Commented on the post',
      time: '11 h',
    },
    {
      id: '8',
      name: 'Alexica Blix',
      text: 'Commented on the post',
      time: '11 h',
    },
    {
      id: '9',
      name: 'Alexica Blix',
      text: 'Commented on the post',
      time: '11 h',
    },
  ],
  previous: [
    {
      id: '4',
      name: 'Alexica Blix',
      text: 'Commented on the post',
      time: '11 h',
    },
    {
      id: '5',
      name: 'Alexica Blix',
      text: 'Commented on the post',
      time: '11 h',
    },
  ],
};

const NotificationCard = ({
  name,
  text,
  time,
}: {
  name: string;
  text: string;
  time: string;
}) => (
  <View style={styles.card}>
    <Image
      source={require('../../assets/png/destination.png')} // Replace with your actual profile image
      style={styles.avatar}
    />
    <View style={styles.cardContent}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
    <TouchableOpacity>
      <NotificationIcon width={25} height={25} fill={colors.black} />
    </TouchableOpacity>
  </View>
);

const NotificationScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity>
          <NotificationIcon width={25} height={25} fill={colors.black} />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>New</Text>
      {notifications.new.map(n => (
        <NotificationCard key={n.id} {...n} />
      ))}

      <Text style={styles.sectionTitle}>Earlier</Text>
      {notifications.earlier.map(n => (
        <NotificationCard key={n.id} {...n} />
      ))}
    </ScrollView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: '15%',
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'green',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
  },
  name: {
    fontWeight: '600',
  },
  text: {
    fontSize: 13,
    color: '#333',
  },
  time: {
    fontSize: 11,
    color: '#666',
    marginTop: 2,
  },
});
