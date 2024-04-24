import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {globalStyle} from '../styles';

const BySkin = ({navigation, byMakeup}) => {
  return (
    <View style={globalStyle.container}>
      {
        byMakeup.map((skin, index)=>(
          <View style={globalStyle.card} key={index}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProductListStack', {
                  screen: 'ProductList',
                  params: {query: `solution/${skin.slug}`},
                })
              }>
              <View style={globalStyle.cardContent}>
                {
                  skin.image ?(
                    <Image source={{uri: skin.image}} style={globalStyle.cardImage} />
                  ):
                  (
                    <Image source={require('../../assets/icon/no-photo.png')} style={globalStyle.cardImage}/>
                  )
                }
                <Text style={globalStyle.cardTitle}>{skin.title}</Text>
              </View>
            </TouchableOpacity>
        </View>
        ))
      }
    </View>
  );
};

export default BySkin;