// FindArtisansScreen.js

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'; // Import the styles

const FindArtisansScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Find Artisans</Text>
      {/* Add components for location-based matching here */}

      <TouchableOpacity style={styles.button} onPress={() => console.log('Find Artisans')}>
        <Text style={styles.buttonText}>Find Artisans</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FindArtisansScreen;
