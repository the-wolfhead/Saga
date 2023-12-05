// LoginScreen.js

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'; // Import the styles

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      {/* Add login form or authentication components here */}

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
