import auth from '@react-native-firebase/auth';
import React, {Component, useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import SearchBar from './Components/SearchBar';

const Explore = () => {
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  // // Handle user state changes
  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // if (initializing) return null;

  // if (!user) {
  //   return (
  //     <View>
  //       <Text>Login</Text>
  //     </View>
  //   );
  // }

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <View style={styles.header}>
        <Text style={styles.headerText}> Обзор </Text>
      </View>
      <SearchBar />
      <FlatList
        style={{paddingHorizontal: 20}}
        data={DATA}
        keyExtractor={(item) => `${item.id}`}
        numColumns={3}
        renderItem={({item}) => (
          <View style={styles.flatlist}>
            <TouchableOpacity>
              <Image
                style={{alignSelf: 'center'}}
                source={require('../assets/images/logo.png')}
              />
              <Text style={styles.flatlistText}>{item.text}</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.popular}>
        <Text style={{fontSize: 23, fontWeight: 'bold'}}>
          {'Популярные                               '}
        </Text>

        <TouchableOpacity>
          <Text style={{color: 'rgba(0,0,0,0.5)'}}>Показать все</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          minHeight: 60,
          maxHeight: 300,
          borderRadius: 15,
          backgroundColor: 'pink',
          marginHorizontal: 15,
          paddingHorizontal: 10,
          marginTop: 10,
          justifyContent: 'center',
        }}>
        <Text> </Text>
      </View>
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsVerticalScrollIndicator={true}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={illustrations}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({item}) => <Image source={item.source} />}
      />
    </SafeAreaView>
  );
};

let illustrations = [
  {id: 0, source: require('../assets/images/test.png')},
  {id: 1, source: require('../assets/images/test.png')},
  {id: 2, source: require('../assets/images/test.png')},
  {id: 3, source: require('../assets/images/test.png')},
  {id: 4, source: require('../assets/images/test.png')},
  {id: 5, source: require('../assets/images/test.png')},
  {id: 6, source: require('../assets/images/test.png')},
];

let DATA = [
  {id: 0, img: require('../assets/images/logo.png'), text: 'Рестораны'},
  {id: 1, img: require('../assets/images/logo.png'), text: 'Халяль'},
  {id: 2, img: require('../assets/images/logo.png'), text: 'Стрит-Фуд'},
  {id: 3, img: require('../assets/images/logo.png'), text: 'Кофейни'},
  {id: 4, img: require('../assets/images/logo.png'), text: 'Рядом'},
  {id: 5, img: require('../assets/images/logo.png'), text: 'Ещё'},
];
const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: 'white',
    marginBottom: 15,
    justifyContent: 'center',
  },
  headerText: {
    marginHorizontal: 15,
    fontSize: 17,
    fontWeight: 'bold',
  },
  flatlist: {
    margin: 8,
    flex: 1,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatlistText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    color: 'rgba(0,0,0,0.6)',
    alignSelf: 'center',
  },
  popular: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
});

export default Explore;
