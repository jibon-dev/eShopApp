import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  View,
  ActivityIndicator,
  useContext
} from 'react-native';
import {useState} from 'react';
import {BASE_URL} from '../../api/api';


const CheckoutForm = ({ navigation, deliveryCharge, deliveryMethod, setTotalQuantity }) => {
 
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

  const stockOutAlert = (list) => {
    const message = list.join('\n\n');
    Alert.alert('Stock Out Items', message);
  };

  const leftStockAlert = (list) => {
    const message = list.join('\n\n');
    Alert.alert('Left Stock Items', message);
  };

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/invoices/api/checkout-api/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          delivery_charge: parseInt(deliveryCharge),
          delivery_method: parseInt(deliveryMethod),
          platform: 'Mobile',
        }),
      });

      // if (!response.ok) {
      //   throw new Error('Network response was not ok');
      // }

      const responseData = await response.json();

      if (responseData.status === false) {
        if (responseData.stock_out_list && responseData.stock_out_list.length > 0) {
          stockOutAlert(responseData.stock_out_list);
        }
        if (responseData.left_stock_list && responseData.left_stock_list.length > 0) {
          leftStockAlert(responseData.left_stock_list);
        }
        setLoading(false);
        navigation.navigate('CartStack', { screen: 'Cart' });
        return;
      } else {
        navigation.navigate('InvoiceStack', {
          screen: 'Invoice',
          params: {
            // InvoiceId: responseData.context.invoiceId,
            InvoiceId: responseData["context"]["invoiceId"]
          },
        });
        setTotalQuantity(0);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error during checkout:', error);
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
  buttonText:{
    textAlign:"center",
    color:"#FFFFFF",
    fontSize:16
  }
});

export default CheckoutForm;