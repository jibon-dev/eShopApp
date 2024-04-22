import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {globalStyle} from '../styles';

const ByConcern = ({navigation}) => {
  return (
    <View style={globalStyle.container}>
        <View style={globalStyle.card}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductListStack')
            }>
            <View style={globalStyle.cardContent}>
              {/* <Image
                source={{uri: concern.image}}
                style={globalStyle.cardImage}
              /> */}
              <Image
                source={require('../../assets/icon/no-photo.png')}
                style={globalStyle.cardImage}/>
              <Text style={globalStyle.cardTitle}>title</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={globalStyle.card}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductListStack')
            }>
            <View style={globalStyle.cardContent}>
              {/* <Image
                source={{uri: concern.image}}
                style={globalStyle.cardImage}
              /> */}
              <Image
                source={require('../../assets/icon/no-photo.png')}
                style={globalStyle.cardImage}/>
              <Text style={globalStyle.cardTitle}>title</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={globalStyle.card}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductListStack')
            }>
            <View style={globalStyle.cardContent}>
              {/* <Image
                source={{uri: concern.image}}
                style={globalStyle.cardImage}
              /> */}
              <Image
                source={require('../../assets/icon/no-photo.png')}
                style={globalStyle.cardImage}/>
              <Text style={globalStyle.cardTitle}>title</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={globalStyle.card}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductListStack')
            }>
            <View style={globalStyle.cardContent}>
              {/* <Image
                source={{uri: concern.image}}
                style={globalStyle.cardImage}
              /> */}
              <Image
                source={require('../../assets/icon/no-photo.png')}
                style={globalStyle.cardImage}/>
              <Text style={globalStyle.cardTitle}>title</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={globalStyle.card}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductListStack')
            }>
            <View style={globalStyle.cardContent}>
              {/* <Image
                source={{uri: concern.image}}
                style={globalStyle.cardImage}
              /> */}
              <Image
                source={require('../../assets/icon/no-photo.png')}
                style={globalStyle.cardImage}/>
              <Text style={globalStyle.cardTitle}>title</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={globalStyle.card}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductListStack')
            }>
            <View style={globalStyle.cardContent}>
              {/* <Image
                source={{uri: concern.image}}
                style={globalStyle.cardImage}
              /> */}
              <Image
                source={require('../../assets/icon/no-photo.png')}
                style={globalStyle.cardImage}/>
              <Text style={globalStyle.cardTitle}>title</Text>
            </View>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default ByConcern;