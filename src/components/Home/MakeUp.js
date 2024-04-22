
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {globalStyle} from '../styles';

const MakeUp = ({byMakeup, navigation}) => {
  return (
    <View style={globalStyle.container}>
      
        <View style={globalStyle.card}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductListStack')}>
            <View style={globalStyle.cardContent}>
              {/* <Image
                source={{uri: makeup.image}}
                style={globalStyle.cardImage}
              /> */}
              <Image
                source={require('../../assets/icon/no-photo.png')}
                style={globalStyle.cardImage}
                resizeMode={'contain'}/>
              <Text style={globalStyle.cardTitle}>Product Title</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={globalStyle.card}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductListStack')}>
            <View style={globalStyle.cardContent}>
              <Image
                source={require('../../assets/icon/no-photo.png')}
                style={globalStyle.cardImage}
                resizeMode={'contain'}/>
              <Text style={globalStyle.cardTitle}>Product Title</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={globalStyle.card}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductListStack')}>
            <View style={globalStyle.cardContent}>
              <Image
                source={require('../../assets/icon/no-photo.png')}
                style={globalStyle.cardImage}
                resizeMode={'contain'}/>
              <Text style={globalStyle.cardTitle}>Product Title</Text>
            </View>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default MakeUp;
