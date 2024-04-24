import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {globalStyle} from '../styles';

const ByConcern = ({navigation, byConcern}) => {
  return (
    <View style={globalStyle.container}>
      {
        byConcern.map((concern, index)=>(
        <View style={globalStyle.card} key={index}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProductListStack', {
                  screen: 'ProductList',
                  params: {query: `solution/${concern.slug}`},
                })
              }>
              <View style={globalStyle.cardContent}>
                {
                  concern.image ?(
                    <Image source={{uri: concern.image}} style={globalStyle.cardImage}/>
                  ):
                  (
                    <Image source={require('../../assets/icon/no-photo.png')} style={globalStyle.cardImage}/>
                  )
                }
                <Text style={globalStyle.cardTitle}>{concern.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))
      }
    </View>
  );
};

export default ByConcern;