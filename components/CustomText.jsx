import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const CustomText = () => {
  return (
    <View style={styles.container}>
      <Text
        numberOfLines={2}
        onPress={() => alert('Hello')}
        style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus natus
        sequi amet animi enim tenetur ipsa et corporis, similique laborum. A quo
        accusamus aliquid, dolore excepturi maxime consectetur modi libero.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Arial',
  },

  container: {
    border: '2px solid red',
  },
});

export default CustomText;
