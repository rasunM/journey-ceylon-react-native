import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface Props {
  name: string;
  rating?: number;
  location?: string;
  type: string;
  image: any;
}

const ListingCard: React.FC<Props> = ({
  name,
  rating,
  location,
  type,
  image,
}) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.label}>
        <Text style={styles.labelText}>{type}</Text>
      </View>
      <Text style={styles.name}>{name}</Text>
      {rating && <Text style={styles.rating}>⭐ {rating}</Text>}
      {location && <Text style={styles.location}>{location}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 180,
    marginRight: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    paddingBottom: 10,
  },
  image: {
    width: '100%',
    height: 100,
  },
  label: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 5,
  },
  labelText: {
    fontSize: 12,
    fontWeight: '600',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 6,
    marginHorizontal: 8,
  },
  rating: {
    marginHorizontal: 8,
    fontSize: 12,
  },
  location: {
    marginHorizontal: 8,
    fontSize: 11,
    color: 'gray',
  },
});

export default ListingCard;
