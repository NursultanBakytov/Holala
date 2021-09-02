import React from 'react';
import {Image, TextInput, View} from 'react-native';

const SearchBar = () => {
  return (
    <View
      style={{
        height: 50,
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.1)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginHorizontal: 15,
      }}>
      <TextInput
        style={{fontSize: 14, fontWeight: '600', width: '95%'}}
        placeholder="Поиск"
        placeholderTextColor="rgba(124,124,124,1)"
      />
      <Image source={require('../../assets/images/search.png')} />
    </View>
  );
};

export default SearchBar;
