import React from 'react';
import {View, ImageBackground, Text, StyleSheet} from 'react-native';

const CustomImageBackground = () => {
  return (
    <View>
      <ImageBackground
        source={{
          uri: 'https://live.staticflickr.com/4290/35007480536_f8b62a366f_b.jpg',
        }}
        style={styles.background}
        resizeMode="cover">
        <Text style={styles.text}>Hello World</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CustomImageBackground;
