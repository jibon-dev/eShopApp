import React from 'react';
import {View, StyleSheet, Platform, useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';

const About = ({aboutData}) => {
  const {width} = useWindowDimensions()

  const renderHtmlOptions = {
    baseStyle: { lineHeight: 25, color:"#000" }
  };

  return (
    <View style={styles.contactContainer}>
      <View style={styles.contact}>
        {aboutData.map((about, index) => (
            <RenderHtml
              key={index}
              source={{ html: about?.description }}
              contentWidth={width}
              {...renderHtmlOptions}
            />
          ))
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    flex: 1,
  },
  contact: {
    flex: 1,
    padding: 5,
    color:"#000",
    ...Platform.select({
      ios: {
        marginBottom: '0%',
      },
      android: {
        marginBottom: 0,
      },
    }),
  }
});

export default About;
