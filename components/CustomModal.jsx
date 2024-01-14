import React, {useState} from 'react';
import {Modal, View, Text, Alert, TouchableHighlight} from 'react-native';

const CustomModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          Alert.alert('Modal Closed');
          setModalVisible(!modalVisible);
        }}
        visible={modalVisible}>
        <View>
          <View>
            <Text>This is a text inside modal</Text>
            <TouchableHighlight onPress={() => setModalVisible(!modalVisible)}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight onPress={() => setModalVisible(true)}>
        <Text>Show Modal</Text>
      </TouchableHighlight>
    </View>
  );
};

export default CustomModal;
