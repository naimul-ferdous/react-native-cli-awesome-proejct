import React from 'react';
import {View, StatusBar} from 'react-native';

const CustomStatusBar = () => {
  return (
    <View>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'#6A0E37'}
        hidden={false}
        animated={true}
        translucent={true}
      />
    </View>
  );
};

export default CustomStatusBar;
