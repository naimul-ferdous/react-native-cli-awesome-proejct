import React from 'react';
import {View, Button} from 'react-native';

const CustomButton = () => {
  const onPressHandler = () => {
    alert('Button Pressed');
  };
  return (
    <View>
      <Button title="Click Me" color={'#841584'} onPress={onPressHandler} />
    </View>
  );
};

export default CustomButton;
