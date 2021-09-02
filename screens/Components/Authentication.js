import React, {useState} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Body,
  Text,
  Button,
  Item,
  Label,
  Input,
  View,
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

import {StatusBar, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';

const Authentication = (props) => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [confirm, setConfirm] = useState(null);

  const signInWithPhoneNumber = async () => {
    auth().settings.appVerificationDisabledForTesting = true;

    const confirmation = await auth().signInWithPhoneNumber(phone);

    setConfirm(confirmation);
  };

  const confirmCode = async () => {
    try {
      await confirm.confirm(code);

      props.navigation.replace('Welcome');
    } catch (err) {
      alert('Введите корректно');
    }
  };

  if (!confirm) {
    return (
      <View style={{backgroundColor: '#009387', flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#009387" />
        <View style={styles.header}>
          <Text style={styles.text_header}>Регистрация</Text>
        </View>
        <View style={styles.footer}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Номер телефона</Text>
          <TextInput
            placeholder="Введите в формате: +996"
            placeholderTextColor="rgba(0,0,0,0.4)"
            value={phone}
            onChangeText={(text) => setPhone(text)}
            style={[styles.textInput]}
          />
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => props.navigation.replace('Welcome')}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                Phone Number Sign In
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={{backgroundColor: '#009387', flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#009387" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Регистрация</Text>
      </View>
      <View style={styles.footer}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Вход</Text>
        <TextInput
          placeholder="Пожалуйста введите код "
          placeholderTextColor="rgba(0,0,0,0.4)"
          value={code}
          onChangeText={(text) => setCode(text)}
          style={[styles.textInput]}
        />
        <TouchableOpacity style={styles.signIn} onPress={confirmCode}>
          <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
            <Text style={[styles.textSign, {color: '#fff'}]}>
              Потвердить код
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Authentication;

const styles = StyleSheet.create({
  header: {
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
    height: 200,
    backgroundColor: '#009387',
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textInput: {
    marginVertical: 25,
    paddingLeft: 10,
    color: '#05375a',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 15,
  },
});
