import React from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';

const CustomPressable = () => {
  return (
    <View>
      <Pressable
        onPress={() => console.log('Pressed!')}
        style={({pressed}) => [
          styles.button,
          pressed ? styles.pressedButton : styles.normalButton,
        ]}>
        <Text style={styles.buttonText}>Press Me</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
  },
  pressedButton: {
    backgroundColor: 'darkblue',
  },
  normalButton: {
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default CustomPressable;
