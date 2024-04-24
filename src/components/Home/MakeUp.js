
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {globalStyle} from '../styles';

const MakeUp = ({byMakeup, navigation}) => {
  return (
    <View style={globalStyle.container}>
      {
        byMakeup.map((makeup, index)=>(
          <View style={globalStyle.card} key={index}>
          <TouchableOpacity onPress={() =>
              navigation.navigate('ProductListStack', {
                screen: 'ProductList',
                params: {query: `solution/${makeup.slug}`},
              })
            }>
            <View style={globalStyle.cardContent}>
              {
                makeup.image?(
                  <Image source={{uri: makeup.image}} style={globalStyle.cardImage}/> 
                ):
                (
                  <Image source={require('../../assets/icon/no-photo.png')} style={globalStyle.cardImage} resizeMode={'contain'}/>
                )
              }
              <Text style={globalStyle.cardTitle}>{makeup?.title}</Text>
            </View>
          </TouchableOpacity>
        </View>
        ))
      }
    </View>
  );
};

export default MakeUp;
