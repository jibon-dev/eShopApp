

import React, {
    useState,
    useContext,
    useEffect,
    useCallback,
    useRef,
  } from 'react';
  import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    Platform,
    ScrollView,
    TouchableOpacity,
    FlatList,
    Alert,
    Dimensions,
    Image
  } from 'react-native';
  import { BASE_URL, bela} from '../api/api';
  import RelatedProduct from '../components/RelatedProduct/RelatedProduct';
  
  const images = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/400',
    'https://via.placeholder.com/500'
  ];
  
  
  const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
  
  const ProductDetailScreen = ({navigation, route}) => {
    const { product } = route?.params;
  
    return (
      <SafeAreaView style={styles.productDetailContainer}>
        <View style={styles.productDetailWrap}>
          <ScrollView>
            <View style={styles.productDetailContent}>
              <Image
                source={require('../assets/icon/no-photo.png')}
                  style={styles.productImage}
              />
              <Text style={styles.productDetailMainTitle}>
                Huawei nova 5T {product?.title}
              </Text>
              <View style={{marginBottom: 10}} />
              <View style={{flexDirection: 'row'}}>
                <View style={{width: '75%', marginBottom: 20}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.productDetailHealthTips}>
                      Health tips : health tips
                    </Text>
                  </View>
                </View>
                <View style={{width: '18%'}}>
                  <View style={{flex: 1}}>
                    <View style={{flexDirection: 'row'}}>
                      <View>
                        <TouchableOpacity>
                          <Text
                            style={styles.minusButtonDis}>
                            -
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity>
                        <Text style={styles.quantityButton}>
                          2
                        </Text>
                      </TouchableOpacity>
                      <View>
                        <TouchableOpacity>
                          <Text
                            style={styles.plusButtonDis}>
                            +
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: '70%', marginTop: 10}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold', color:"#000"}}>Price: ৳</Text>
                    <Text style={styles.productDetailNewPrice}>
                      200
                    </Text>
                    <Text style={styles.productDetailOldPrice}>
                      300
                    </Text>
                  </View>
                </View>
                <View style={{width: '30%'}}>
                  
                    <TouchableOpacity>
                      <Text style={styles.addToCartButton}>Buy Now</Text>
                    </TouchableOpacity>
                  
                  {/* <Text style={styles.outOfStockButton}>Out Of Stock</Text> */}
                </View>
              </View>
              <Text style={styles.productDetailWeight}>
                Weight : 200 ML
              </Text>
              <Text style={{fontWeight: 'bold', marginTop: 20, color:"#000"}}>
                Description :
              </Text>
              <Text style={styles.productDetailDescription}>
                <Text style={styles.productDescription}>
                  description
                </Text>
              </Text>
            </View>
            {/* Related Product */}
            <View style={styles.relatedProduct}>
              <Text style={styles.relatedProductTitle}>Related Products</Text>
              <View style={styles.relatedProductContent}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={images}
                  renderItem={({item}) => {
                    return (
                      <>
                        <RelatedProduct item={item} navigation={navigation} />
                      </>
                    );
                  }}
                />
                {/* <FlatList
                  data={images}
                  renderItem={({ item }) => (
                    <Image source={{ uri: item }} style={styles.image} />
                  )}
                  keyExtractor={(item, index) => index.toString()}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                /> */}
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    productDetailContainer: {
      flex: 1,
      color:"#000"
    },
    productDetailWrap: {
      flex: 1,
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
    productImage: {
      width: '100%',
      height: 300,
      resizeMode: 'cover',
      borderRadius: 8,
      marginBottom:5
    },
    productDetailTitleWrap: {
      marginTop: 5,
      marginLeft: 10,
      marginRight: 10,
      justifyContent: 'center',
      alignItems: 'center',
      color:"#000"
    },
    productDetailTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      borderBottomColor: 'green',
      borderBottomWidth: 2,
      marginBottom: 5,
      color:"#000"
    },
    productDescription:{
      textAlign: 'justify', lineHeight: 25, color:"#000"
    },
    /* Product Detail Content */
    productDetailContent: {
      margin: 10,
    },
    productDetailImage: {
      width: '100%',
      height: 310,
      borderRadius: 7,
      marginBottom: 7,
    },
    productDetailMainTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'left',
      color:"#000"
    },
    productDetailDiscount: {
      fontWeight: 'bold',
      marginTop: 2,
      marginBottom: 4,
    },
    productDetailHealthTips: {
      fontWeight: 'bold',
      marginTop: 2,
      marginBottom: 5,
      color:"#000"
    },
    productDetailWeight: {
      fontWeight: 'bold',
      marginTop: 5,
      marginBottom: 5,
      color:"#000"
    },
    productDetailOldPrice: {
      color: '#E04F54',
      marginLeft: 10,
      fontWeight: 'bold',
      textDecorationLine: 'line-through',
      color:"#000"
    },
    productDetailNewPrice: {
      fontWeight: 'bold',
      marginLeft: 10,
      color:"#000"
    },
    addToCartButton: {
      padding: 7,
      backgroundColor: '#F9C65D',
      textAlign: 'center',
      borderWidth: 1,
      borderRadius: 8,
      overflow: 'hidden',
      fontWeight: 'bold',
      borderColor: '#F9C65D',
      color:"#000"
    },
    outOfStockButton: {
      padding: 1,
      backgroundColor: '#E04F54',
      color: '#FFF',
      textAlign: 'center',
      borderWidth: 1,
      borderRadius: 5,
      overflow: 'hidden',
      fontWeight: 'bold',
      borderColor: '#E04F54',
      fontSize: 12,
      width: 90,
    },
    addToCartButtonDis: {
      padding: 7,
      backgroundColor: '#F9C65D',
      textAlign: 'center',
      borderWidth: 1,
      borderRadius: 8,
      overflow: 'hidden',
      fontWeight: 'bold',
      borderColor: '#F9C65D',
      opacity: 0.6,
    },
    addToCart: {
      flexDirection: 'row',
      marginTop: 5,
      marginBottom: 7,
    },
    plusButton: {
      padding: 8,
      backgroundColor: '#ccccca',
      color: 'black',
      fontSize: 14,
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
      overflow: 'hidden',
    },
    plusButtonDis: {
      padding: 8,
      backgroundColor: '#ccccca',
      color: 'black',
      fontSize: 14,
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
      opacity: 0.6,
      overflow: 'hidden',
    },
    quantityButton: {
      backgroundColor: '#E5E5E5',
      padding: 8,
      width: 35,
      textAlign: 'center',
      fontWeight: 'bold',
      overflow: 'hidden',
    },
    minusButton: {
      padding: 8,
      backgroundColor: '#ccccca',
      color:"#000",
      fontSize: 14,
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
      overflow: 'hidden',
    },
    minusButtonDis: {
      padding: 8,
      backgroundColor: '#ccccca',
      color: 'black',
      fontSize: 14,
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
      opacity: 0.6,
      overflow: 'hidden',
    },
    productDetailDescription: {
      textAlign: 'justify',
      margin: 5,
    },
    /* Related Product */
    relatedProduct: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    relatedProductTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
      textAlign: 'center',
      color:"#000",
    },
    relatedProductContent: {
      flex: 1,
      flexDirection: 'row',
    },
  
    // Related Slider
    pagination: {
      position: 'absolute',
      bottom: 8,
      width: '100%',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    paginationDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginHorizontal: 2,
    },
    paginationDotActive: {
      backgroundColor: '#183153',
    },
    paginationDotInactive: {
      backgroundColor: 'gray',
    },
    carousel: {flex: 1},
  
  });
  
  export default ProductDetailScreen;
  