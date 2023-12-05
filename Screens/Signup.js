// SignUpScreen.js

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'; // Import the styles

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
      {/* Add sign-up form or registration components here */}

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

