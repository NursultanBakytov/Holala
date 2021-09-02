import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Welcome = (props) => {
  const [selectedValue, setSelectedValue] = useState('Бишкек');
  onPressLogin = async () => {
    await storeData();

    props.navigation.replace('BottomTabNavigation');
  };

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('@storage_Key', selectedValue);
    } catch (e) {
      // saving error
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: 'rgba(0,0,0,0)'}}>
      <View style={styles.body}>
        <StatusBar barStyle="light-content" backgroundColor="red" />
        <Image
          style={{
            resizeMode: 'contain',
            marginTop: 100,
            marginBottom: 50,
            marginHorizontal: 50,
          }}
          source={require('../assets/images/logo.png')}
        />
        <Text style={styles.text}>{'Добро\nПожаловать!'}</Text>
        <Picker
          selectedValue={selectedValue}
          style={{height: 50, marginHorizontal: 10, marginVertical: 100}}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Бишкек" value="Бишкек" />
          <Picker.Item label="Чуй" value="Чуй" />
          <Picker.Item label="Талас" value="Талас" />
          <Picker.Item label="Нарын" value="Нарын" />
          <Picker.Item label="Ысык-Кол" value="Ысык-Кол" />
          <Picker.Item label="Жалал-Абад" value="Жалал-Абад" />
          <Picker.Item label="Баткен" value="Баткен" />
          <Picker.Item label="Ош" value="Ош" />
        </Picker>
        <TouchableOpacity style={styles.button} onPress={onPressLogin}>
          <Text style={styles.buttonText}>Продолжить</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  body: {
    backgroundColor: 'red',
    height: '100%',
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: '900',
    marginHorizontal: 50,
  },
  button: {
    backgroundColor: 'white',
    width: 150,
    height: 45,
    borderRadius: 10,
    marginHorizontal: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50,
  },
  buttonText: {
    color: 'red',
    fontSize: 23,
    fontWeight: '600',
  },
});
export default Welcome;
