import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  View,
  ActivityIndicator
} from 'react-native';
import {useState} from 'react';
import {BASE_URL} from '../../api/api';


const CheckoutForm = ({navigation, deliveryCharge, deliveryMethod}) => {
  
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    contact_number: '',
    address: '',
    location: '',
    city: '',
    notes: '',
  });

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleCheckout = async () => {
    setLoading(true);
    try {
      // Make a POST request to your Django backend's checkout endpoint
      const response = await fetch(`${BASE_URL}/invoices/api/checkout-api/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          delivery_charge: parseInt(deliveryCharge),
          delivery_method: parseInt(deliveryMethod),
          // total: '100',
          platform: 'Mobile',
        }),
      });
      if (!response.ok) {
        // Handle non-successful response
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseData = await response.json();
      // Handle successful response
      console.log(responseData);
      // Navigate to the next screen, e.g., the invoice screen
      navigation.navigate('InvoiceStack');
    } catch (error) {
      // Handle errors
      console.error('Error during checkout:', error);
    } finally {
      setLoading(false);
    }
  };
  
   
  return (
    <>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <View style={{marginBottom: 10}}>
                <TextInput
                  name="first_name"
                  placeholder="First Name * "
                  selectionColor="#183153"
                  style={styles.checkoutAddressForm}
                  value={formData.first_name}
                  onChangeText={(text) => handleInputChange('first_name', text)}
                />
                
              </View>
            </View>
            <View style={{flex: 1}}>
              <View style={{marginBottom: 10}}>
                <TextInput
                  name="last_name"
                  placeholder="Last Name * "
                  selectionColor="#183153"
                  style={styles.checkoutAddressForm}
                  value={formData.last_name}
                  onChangeText={(text) => handleInputChange('last_name', text)}
                />
              </View>
            </View>
          </View>
          <View style={{marginBottom: 10}}>
            <TextInput
              name="email"
              placeholder="Email Address"
              keyboardType="email-address"
              selectionColor="#183153"
              style={styles.checkoutAddressForm}
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
            />
            
          </View>
          <View style={{marginBottom: 10}}>
            <TextInput
              name="contact_number"
              placeholder="Phone Number * "
              style={styles.checkoutAddressForm}
              keyboardType="numeric"
              selectionColor="#183153"
              // editable={false}
              value={formData.contact_number}
              onChangeText={(text) => handleInputChange('contact_number', text)}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <TextInput
              name="address"
              placeholder="Address (Ex. street name, street number, house/flat number) * "
              selectionColor="#183153"
              style={styles.checkoutAddressForm}
              value={formData.address}
              onChangeText={(text) => handleInputChange('address', text)}
            />
            
          </View>
          <View style={{marginBottom: 10}}>
            <TextInput
              name="location"
              placeholder="Your area ( Ex. Mirpur, Dhanmondi ) *"
              style={styles.checkoutAddressForm}
              selectionColor="#183153"
              value={formData.location}
              onChangeText={(text) => handleInputChange('location', text)}
            />
            
          </View>
          <View style={{marginBottom: 10}}>
            <TextInput
              name="city"
              placeholder="City ( Ex. Dhaka, Khulna, Chittagong ) *"
              style={styles.checkoutAddressForm}
              selectionColor="#183153"
              value={formData.city}
              onChangeText={(text) => handleInputChange('city', text)}
            />
          </View>

          <TextInput
            name="notes"
            placeholder="Notes for order, delivery (optional). e.g. specific delivery date or packaging *"
            style={styles.checkoutAddressNoteForm}
            selectionColor="#183153"
            value={formData.notes}
            onChangeText={(text) => handleInputChange('notes', text)}
          />
          
          <View
            style={{flexDirection: 'row', marginBottom: 10, flexWrap: 'wrap'}}>
            <View>
              <Text style={{fontSize: 13, marginRight: 2}}>
                By Clicking Place an order you also agree to all the
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('TermsAndConditionStack')}>
                <Text style={{color: 'blue', fontSize: 13}}>
                  Terms & Conditions
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Checkout button */}
          <TouchableOpacity
            style={styles.placeAnOrder}
            onPress={handleCheckout}
            disabled={loading}>
            <Text style={styles.buttonText}>{loading ? 'Processing...' : 'Checkout'}</Text>
          </TouchableOpacity>
          {/* Loading indicator */}
          {loading && <ActivityIndicator size="large" color="#007bff" style={{ marginTop: 20 }} />}
          <View style={{marginBottom: 50}} />
        </>
  );
};

const styles = StyleSheet.create({
  checkoutAddressForm: {
    height: 40,
    marginLeft: 2,
    marginRight: 3,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#D9D9D9',
    color: 'black',
  },
  checkoutAddressNoteForm: {
    height: 60,
    marginLeft: 2,
    marginRight: 3,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
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
  placeOrderDisable: {
    padding: 7,
    backgroundColor: 'darkgrey',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 8,
    fontWeight: 'bold',
    borderColor: '#999999',
    color: '#FFF',
    marginBottom: 10,
    // overflow: "hidden",
    // cursor: "not-allow"
  },
  loginContainer: {
    width: '80%',
    alignItems: 'center',
    padding: 10,
    elevation: 10,
    backgroundColor: '#e6e6e6',
  },
  textInput: {
    height: 40,
    width: '100%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
});

export default CheckoutForm;