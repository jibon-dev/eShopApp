import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  Platform,
  TextInput,
} from 'react-native';

const Checkout = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView keyboardShouldPersistTaps={'handled'}>
          <View style={styles.checkoutProcess}>
            {/*Your cart Section */}
            <View style={styles.yourCartSection}>
              {/*CartItem*/}
              <View style={styles.checkoutCartItem}>
                <View style={styles.yourCart}>
                  <Text style={styles.yourCartTitle}>Your Cart </Text>
                </View>
                <View style={styles.items}>
                  <Text style={styles.totalItems}>5 items</Text>
                </View>
              </View>
              {/*Product Cost*/}
              <View style={styles.checkoutProductCost}>
                <View style={styles.productCost}>
                  <Text style={styles.productCostTitle}>Product Cost </Text>
                </View>
                <View style={styles.productPrice}>
                  <Text style={styles.productPriceTitle}>৳ 30</Text>
                </View>
              </View>
              {/*Delivery Charge Expected*/}
              <View style={styles.deliveryChargeContent}>
                <View style={styles.deliveryCharge}>
                  <Text style={styles.deliveryChargeTitle}>
                    Delivery Charge
                  </Text>
                </View>
                <View style={styles.deliveryPrice}>
                  <Text style={styles.deliveryPriceTitle}>৳ 00</Text>
                </View>
              </View>
              {/*Total Cost*/}
              <View style={styles.totalCostContent}>
                <View style={styles.totalCost}>
                  <Text style={styles.totalCostTitle}>Total Cost </Text>
                </View>
                <View style={styles.totalPrice}>
                  <Text style={styles.totalPriceTitle}>৳ 100 + 60</Text>
                </View>
              </View>
            </View>
            <Text style={styles.deliveryMethodTitle}>Select Delivery Area</Text>
            <View style={styles.delivery}>
              <View style={{flex: 1, margin: 4}}>
                <TouchableOpacity>
                  <View style={styles.outSideDhakaButton}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={{flex: 4}}>
                        <Text>Inside Dhaka</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{flex: 1, margin: 4}}>
                <TouchableOpacity>
                  <View style={styles.outSideDhakaButton}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={{flex: 1}}>
                        {/* <Text>Empty</Text> */}
                      </View>
                      <View style={{flex: 4}}>
                        <Text>Outside Dhaka</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {/*Address*/}
            <View style={styles.addressForm}>
              <Text style={styles.addressText}>Add Address</Text>
              {/*from CheckoutForm*/}
              <>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 1}}>
                    <View style={{marginBottom: 10}}>
                      <TextInput
                        name="first_name"
                        placeholder="First Name * "
                        style={styles.checkoutAddressForm}
                        selectionColor="#183153"
                      />
                    </View>
                  </View>
                  <View style={{flex: 1}}>
                    <View style={styles.marginBottomSpace}>
                      <TextInput
                        name="last_name"
                        placeholder="Last Name * "
                        style={styles.checkoutAddressForm}
                        selectionColor="#183153"
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.marginBottomSpace}>
                  <TextInput
                    name="email"
                    placeholder="Email Address"
                    style={styles.checkoutAddressForm}
                    keyboardType="email-address"
                    selectionColor="#183153"
                  />
                </View>
                <View style={styles.marginBottomSpace}>
                  <TextInput
                    name="contact_number"
                    placeholder="Phone Number * "
                    style={styles.checkoutAddressForm}
                    keyboardType="numeric"
                    selectionColor="#183153"
                    // editable={false}
                  />
                </View>
                <View style={styles.marginBottomSpace}>
                  <TextInput
                    name="address"
                    placeholder="Address (Ex. street name, street number, house/flat number) * "
                    style={styles.checkoutAddressForm}
                    selectionColor="#183153"
                  />
                </View>
                <View style={styles.marginBottomSpace}>
                  <TextInput
                    name="location"
                    placeholder="Your area ( Ex. Mirpur, Dhanmondi ) *"
                    style={styles.checkoutAddressForm}
                    selectionColor="#183153"
                  />
                </View>
                <View style={styles.marginBottomSpace}>
                  <TextInput
                    name="city"
                    placeholder="City ( Ex. Dhaka, Khulna, Chittagong ) *"
                    style={styles.checkoutAddressForm}
                    selectionColor="#183153"
                  />
                </View>

                <TextInput
                  name="notes"
                  placeholder="Notes for order, delivery (optional). e.g. specific delivery date or packaging *"
                  style={styles.checkoutAddressNoteForm}
                  selectionColor="#183153"
                />
                <View style={styles.termPlace}>
                  <View>
                    <Text style={styles.byPlace}>
                      By Clicking Place an order you also agree to all the
                    </Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('TermsAndCondition')}>
                      <Text style={styles.termConditions}>
                        Terms & Conditions
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <TouchableOpacity
                  onPress={() => navigation.navigate('InvoiceStack')}>
                  <Text style={styles.placeAnOrder}>Place your order</Text>
                </TouchableOpacity>
                <View style={styles.marginBottomStyle} />
              </>
            </View>
            <View style={styles.checkoutMargin} />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        marginBottom: 0,
      },
      android: {
        marginBottom: 0,
      },
    }),
  },

  delivery: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  checkoutProcess: {
    flex: 1,
    margin: 5,
    marginTop: 15,
  },
  yourCartSection: {
    overflow: 'hidden',
    marginBottom: 10,
  },
  checkoutProcessTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    paddingBottom: 20,
  },
  checkoutCartItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  yourCart: {
    flex: 4,
  },
  yourCartTitle: {
    fontWeight: 'bold',
    marginLeft: 4,
    fontSize: 14,
    padding: 3,
  },
  items: {
    flex: 1,
    marginRight: 5,
  },
  totalItems: {
    textAlign: 'center',
    backgroundColor: '#6C757D',
    borderRadius: 7,
    padding: 3,
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 14,
    overflow: 'hidden',
  },
  checkoutProductCost: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  productCost: {
    flex: 1,
    marginRight: 5,
  },
  productCostTitle: {
    fontWeight: 'bold',
    marginLeft: 4,
    fontSize: 14,
  },
  productPrice: {
    flex: 1,
    marginRight: 5,
  },
  productPriceTitle: {
    fontWeight: 'bold',
    marginLeft: 4,
    fontSize: 14,
    textAlign: 'right',
  },
  deliveryChargeContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  deliveryCharge: {
    flex: 1,
    marginRight: 5,
  },
  deliveryChargeTitle: {
    fontWeight: 'bold',
    marginLeft: 4,
    fontSize: 14,
  },
  deliveryPrice: {
    flex: 1,
    marginRight: 5,
  },
  deliveryPriceTitle: {
    fontWeight: 'bold',
    marginLeft: 4,
    fontSize: 14,
    textAlign: 'right',
  },
  totalCostContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginLeft: 1,
    marginRight: 1,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    backgroundColor: '#183153',
    color: '#FFF',
    overflow: 'hidden',
  },
  totalCost: {
    flex: 1,
    marginLeft: 3,
  },
  totalCostTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#FFF',
    marginLeft: 3,
  },
  totalPrice: {
    flex: 1,
  },
  totalPriceTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'right',
    color: '#FFF',
    marginRight: 5,
  },

  deliveryMethodButton: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  // deliveryMethod
  deliveryMethod: {
    overflow: 'hidden',
  },
  deliveryMethodTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  deliveryMethodContent: {
    flexDirection: 'row',
  },
  deliveryOption: {
    flex: 1,
    borderBottomColor: 'black',
    borderRightWidth: 1,
  },
  insideDhakaTitle: {
    marginBottom: 10,
    fontSize: 14,
  },
  outsideDhakaTitle: {
    marginBottom: 10,
    fontSize: 14,
  },
  deliveryChargeMl: {
    flex: 2,
  },
  deliveryChargeMlTitle: {
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 14,
    marginBottom: 10,
  },
  deliveryChargeMlContent: {
    marginLeft: 15,
  },
  deliveryChargeMessage: {
    marginTop: 8,
  },
  insideDhakaMessage: {
    textAlign: 'justify',
  },
  outSideDhakaMessage: {
    textAlign: 'justify',
  },

  // Address Form
  addressForm: {
    flex: 1,
  },

  checkoutAddressForm: {
    height: 40,
    marginLeft: 2,
    marginRight: 3,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: '#D9D9D9',
    marginBottom: 10,
  },
  checkoutAddressNoteForm: {
    height: 60,
    marginLeft: 2,
    marginRight: 3,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: '#D9D9D9',
    marginBottom: 10,
  },
  placeAnOrder: {
    padding: 7,
    backgroundColor: '#183153',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 8,
    fontWeight: 'bold',
    borderColor: '#183153',
    color: '#FFF',
    marginBottom: 10,
    overflow: 'hidden',
  },

  deliveryMethodCard: {
    borderRadius: 6,
    overflow: 'hidden',
    elevation: 3,
    backgroundColor: '#FFF',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    padding: 7,
  },

  insideDhakaButton: {
    padding: 5,
    backgroundColor: '#F9C65D',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    fontWeight: 'bold',
    borderColor: '#F9C65D',
    color: 'black',
  },
  outSideDhakaButton: {
    padding: 5,
    backgroundColor: '#ccccca',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    fontWeight: 'bold',
    borderColor: '#ccccca',
    color: 'black',
  },
  checkoutMargin: {
    ...Platform.select({
      ios: {
        marginBottom: 50,
      },
      android: {
        marginBottom: 0,
      },
    }),
  },
  addressText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    marginTop: 5,
  },
  marginBottomSpace: {
    marginBottom: 10,
  },
  termPlace: {
    flexDirection: 'row',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  byPlace: {
    fontSize: 13,
    marginRight: 2,
  },
  termConditions: {
    color: 'blue',
    fontSize: 13,
  },
  marginBottomStyle: {
    marginBottom: 50,
  },
});
export default Checkout;
