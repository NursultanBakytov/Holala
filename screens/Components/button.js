import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 67,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 19,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: 'red',
  },
});

export default CustomButton;
