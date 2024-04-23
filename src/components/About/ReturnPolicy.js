import React from 'react';
import {View, StyleSheet, Platform, useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';

const ReturnPolicy = ({returnPolicy}) => {
    const {width} = useWindowDimensions()
    const renderHtmlOptions = {
        baseStyle: { lineHeight: 25, color:"#000000" }
    };

    if (returnPolicy) {
        return (
        <View style={styles.contactContainer}>
            <View style={styles.contact}>
                {returnPolicy.map((rp, index) => (
                    <RenderHtml
                        key={index}
                        source={{ html: rp?.description }}
                        contentWidth={width}
                        {...renderHtmlOptions}
                    />
                    ))
                }
            </View>
        </View>
        );
    }
    else{
        return (
        <SafeAreaView style={styles.noDataContainer}>
            <Text style={styles.noDataTitle}>No Data Found</Text>
        </SafeAreaView>
        );
    }
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
  },
  noDataContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noDataTitle: {
    fontWeight: 'bold',
  },
});

export default ReturnPolicy;
