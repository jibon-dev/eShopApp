import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
import ProductList from '../components/ProductList/ProductList';

// const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
//   const paddingToBottom = 40;
//   return (
//     layoutMeasurement.height + contentOffset.y >=
//     contentSize.height - paddingToBottom
//   );
// };

const ProductListScreen = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.productListContainer}>
      <View style={[styles.viewContainer]}>
        <View style={styles.dropdownSection}>
          <View style={styles.dropdownWrap}>
            <View style={styles.shortBy}>
              <Text style={styles.shortByTitle}>Sort By</Text>
            </View>
          </View>
          <View style={styles.dropdownWrap}>
            {/* <DropDownPicker
              placeholder="Sort by value"
              style={styles.dropDownStyle}
            /> */}
          </View>
        </View>
      </View>
      <View style={styles.productListWrap}>
        <ScrollView>
          <ProductList navigation={navigation} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  productListContainer: {
    flex: 1,
  },
  productListWrap: {
    flex: 1,
    ...Platform.select({
      ios: {
        marginBottom: '0%',
      },
      android: {
        marginBottom: 0,
      },
    }),
  },
  viewContainer: {
    marginHorizontal: 4,
    zIndex: 1,
  },
  dropdownWrap: {
    flex: 1,
  },
  dropdownSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  shortBy: {
    overflow: 'hidden',
  },

  shortByTitle: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },

  noProductWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noProductTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 2,
  },
  productNotDataFound: {
    marginTop: 10,
    padding: 7,
    backgroundColor: '#F9C65D',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    borderColor: '#F9C65D',
    color: '#0C0C0C',
  },
  dropDownStyle: {
    marginTop: 2,
    borderRadius: 5,
    borderColor: '#183153',
    minHeight: 35,
  },
});

export default ProductListScreen;
