import React from 'react';

import {ActivityIndicator, Text, View} from 'react-native';

const CustomActivityIndicator = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Loading, Please wait ...</Text>
      <ActivityIndicator size={'large'} color={'#0000ff'} />
    </View>
  );
};

export default CustomActivityIndicator;
