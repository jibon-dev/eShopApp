import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { BASE_URL } from '../../api/api';

const Cart = ({ cartData, removeItem, handleIncreaseQuantity, handleDecreaseQuantity}) => {

  return (
    <View>
      {cartData.entries.map((entry, index) => (
        <View key={index}>
          <View style={styles.mainContent}>
            <View style={styles.cartImageWrap}>
              {
                entry.image ? (
                  <Image
                    source={{ uri: entry.image }}
                    resizeMode={'contain'}
                    style={styles.cartImage} />
                ) : (
                    <Image
                      source={require('../../assets/icon/no-photo.png')}
                      resizeMode={'contain'}
                      style={styles.cartImage}
                    />
                  )
              }
            </View>
            <View style={styles.cartContent}>
              <Text style={styles.cartTitle}>{entry?.title}</Text>
              <View style={styles.cartQuantity}>
                <View style={styles.cartQuantityPrice}>
                  <Text style={styles.cartPrice}>৳ : {entry?.price} x {entry?.quantity} = {entry?.total}</Text>
                </View>
                <View style={styles.addRemoveQuantity}>
                  <View style={styles.removeIconWrap}>
                    <View style={styles.removeIcon}>
                      <TouchableOpacity onPress={() => removeItem(entry?.id)}>
                        <FontAwesome
                          name="trash"
                          size={20}
                          style={{ color: '#757070' }}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.plusMinusContent}>
                      {/* Decrease Button */}
                      <TouchableOpacity onPress={()=>handleDecreaseQuantity(entry?.product_id)}>
                        <Text style={styles.plusButtonDis}>-</Text>
                      </TouchableOpacity>
                      {/* Quantity */}
                      <Text style={styles.quantityButton}>{entry?.quantity}</Text>
                      {/* Increase Button */}
                      <TouchableOpacity onPress={()=>handleIncreaseQuantity(entry?.product_id)}>
                        <Text style={styles.minusButtonDis}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({

  mainContent: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomWidth: 1,
    borderColor: '#ccccca',
    paddingBottom: 5,
    margin: 5,
  },
  cartImageWrap: {
    width: '14%',
    marginRight: 2,
  },
  cartImage: {
    width: '100%',
    height: 60,
    borderRadius: 5,
  },
  cartContent: {
    width: '85%',
  },
  cartTitle: {
    fontSize: 12,
    marginLeft: 8,
    marginRight: 15,
    height: 30,
  },
  cartQuantity: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cartQuantityPrice: {
    width: '50%',
  },
  cartPrice: {
    textAlign: 'left',
    margin: 3,
    fontSize: 12,
    marginTop: 10,
    marginLeft: 8,
  },
  addRemoveQuantity: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeIconWrap: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  removeIcon: {
    fontSize: 14,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 2,
  },
  plusMinusContent: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  plusButton: {
    marginTop: 2,
    backgroundColor: '#ccccca',
    color: 'black',
    width: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 5,
    overflow: 'hidden',
    padding: 3,
  },
  plusButtonDis: {
    marginTop: 2,
    backgroundColor: '#ccccca',
    color: 'black',
    width: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 5,
    overflow: 'hidden',
    padding: 3,
    opacity: 0.5,
  },
  quantityButton: {
    marginTop: 2,
    color: 'black',
    width: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 3,
  },
  minusButton: {
    marginTop: 2,
    backgroundColor: '#ccccca',
    color: 'black',
    width: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 5,
    padding: 3,
    overflow: 'hidden',
  },
  minusButtonDis: {
    marginTop: 2,
    backgroundColor: '#ccccca',
    color: 'black',
    width: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 5,
    padding: 3,
    opacity: 0.5,
  },
});
export default Cart;
