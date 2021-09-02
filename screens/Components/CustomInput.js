import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';

const CustomInput = ({title, isPassword, onPressHide, isHidden}) => {
  return (
    <View
      style={{
        height: 80,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(226,226,226,1)',
      }}>
      <Text
        style={{fontSize: 16, fontWeight: '600', color: 'rgba(124,124,124,1)'}}>
        {title}
      </Text>

      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <TextInput style={{flex: 1}} secureTextEntry={isHidden} {...props} />

        {isPassword && (
          <TouchableOpacity onPress={onPressHide}>
            <Image source={require('../../assets/hide.png')} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomInput;
