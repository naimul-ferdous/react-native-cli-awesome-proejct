import React from 'react';
import {View, Image} from 'react-native';

const CustomImage = () => {
  return (
    <View>
      <Image
        source={require('../assets/images/11635595.jpg')}
        style={{width: 200, height: 200}}
        resizeMode="contain"
        onLoad={() => console.log('Image Loaded')}
      />
    </View>
  );
};

export default CustomImage;
