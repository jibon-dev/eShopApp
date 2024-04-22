// Home.js
import React, {useState, useEffect, useRef} from 'react';
import {View, Image, FlatList, StyleSheet, Dimensions} from 'react-native';

const defaultSliderImage = require('../../assets/sliders/600x400.png');

const Slide = ({image}) => {
  return <Image source={{uri: image}} style={styles.slideImage} />;
};

const Home = ({sliders}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(scrollToNextSlide, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const scrollToNextSlide = () => {
    if (sliders.length > 0) {
      const nextIndex = (currentIndex + 1) % sliders.length;
      flatListRef.current.scrollToIndex({index: nextIndex});
      setCurrentIndex(nextIndex);
    }
  };

  return (
    <View style={styles.container}>
      {sliders.length > 0 ? (
        <FlatList
          ref={flatListRef}
          data={sliders}
          keyExtractor={(item, index) =>
            item.id ? item.id.toString() : index.toString()
          }
          renderItem={({item}) => <Slide image={item.small_device_url} />}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={event => {
            const contentOffset = event.nativeEvent.contentOffset.x;
            const index = Math.round(
              contentOffset / Dimensions.get('window').width,
            );
            setCurrentIndex(index);
          }}
        />
      ) : (
        <Image source={defaultSliderImage} style={styles.slideImage} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    width: Dimensions.get('window').width,
    height: 300,
    marginBottom: 7,
  },
});

export default Home;
