import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { ImageBackground, Text } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      // Navigate to the Main tab navigator and open the Home tab
      navigation.replace('Main', {
        screen: 'HomeTab', // This will open the HomeTab in Tab.Navigator
      });
    }, 3000); // 3 seconds delay
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/spash_screen.jpg')} style={styles.image}>
          <Text style={styles.text}>Movies</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text: {
    color: 'white',
    fontSize: 30, // Adjusted font size for better visibility
    position: 'absolute', // Positioning the text absolutely within the parent
    top: '15%', // 20% margin from the top of the image
    left: '50%', // Center horizontally
    transform: [{ translateX: -50 }], // Adjust horizontal center alignment
    fontWeight: 'bold', // Make the text bold
  }
});

export default SplashScreen;