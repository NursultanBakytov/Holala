import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onPress = () => {
    this.props.navigation.navigate('Welcome');
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Token');

      if (value !== null) {
        this.setState((state, props) => {
          return {value: value};
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  goToURL = (item) => {
    if (item.id === 2) {
      Linking.openURL('https://wa.me/996707959166');
    } else if (item.id === 3) {
      Linking.openURL('https://google.com');
    }
  };

  render() {
    return (
      <SafeAreaView>
        <View style={styles.profile}>
          <StatusBar barStyle="dark-content" backgroundColor="transparent" />
          <Text style={styles.profileText}>Профиль</Text>
        </View>

        <FlatList
          data={DATA}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({item}) => (
            <TouchableOpacity>
              <View style={styles.profile}>
                <Image source={require('../assets/images/search.png')} />
                <Text style={{flex: 1, marginLeft: 10}}>{item.text}</Text>

                {/* verify Picker */}
                {item.id === 1 && (
                  <TouchableOpacity onPress={this.onPress}>
                    <Text style={{color: 'red', fontWeight: 'bold'}}>
                      {this.state.value}
                    </Text>
                  </TouchableOpacity>
                )}
                {/* verify language */}
                {item.id === 2 && (
                  <Text style={{color: 'red', fontWeight: 'bold'}}>ru</Text>
                )}
              </View>
            </TouchableOpacity>
          )}
        />
        <FlatList
          data={Data}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => this.goToURL(item)}>
              <View>
                <Text style={styles.profileText2}>{item.text}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    );
  }
}
let Data = [
  {id: 0, text: 'Политика конфиденциальности'},
  {id: 1, text: 'Пользовательское соглашение'},
  {id: 2, text: 'Помошь'},
  {id: 3, text: 'О нас'},
  {id: 4, text: 'Версия: 102DEC01200022'},
];
let DATA = [
  {id: 0, text: 'Мои Промокоды'},
  {
    id: 1,
    text: 'Выбор Города',
  },
  {
    id: 2,
    name: 'ru',
    text: 'Язык',
  },
  {
    id: 3,
    name: '',
    text: 'Темная тема',
  },
];

const styles = StyleSheet.create({
  profileText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginTop: 40,
    marginBottom: 15,
  },
  profile: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1.5,
    borderColor: 'rgba(0,0,0,0.2)',
    // backgroundColor: 'red',
  },

  profileText2: {
    color: 'rgba(0,0,0,0.5)',
    paddingTop: 20,
    marginHorizontal: 15,
  },
});
