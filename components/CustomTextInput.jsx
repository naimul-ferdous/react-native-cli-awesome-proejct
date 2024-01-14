import React, {useState} from 'react';

import {View, TextInput, Button} from 'react-native';

const CustomTextInput = () => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    alert('You entered text: ' + text);
  };

  return (
    <View style={{margin: 10}}>
      <TextInput
        style={{height: 40, borderColor: 'grey', borderWidth: 1}}
        onChangeText={text => setText(text)}
        value={text}
        placeholder="Enter text here"
      />

      <Button onPress={handleSubmit} title="Submit" />
    </View>
  );
};

export default CustomTextInput;
