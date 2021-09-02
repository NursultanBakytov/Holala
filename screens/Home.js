import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headerText}> HOLA </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerText: {
    marginHorizontal: 15,
    fontSize: 17,
    fontWeight: 'bold',
  },
});
