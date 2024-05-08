import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
// import axios from 'axios';
import { BASE_URL } from '../api/api';

const CheckoutScreen = ({ navigation }) => {
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
          delivery_charge: 60,
          delivery_method: 1,
          total: '100',
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, marginBottom: 20 }}>Checkout Screen</Text>
          {/* Checkout form */}
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={formData.first_name}
            onChangeText={(text) => handleInputChange('first_name', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={formData.last_name}
            onChangeText={(text) => handleInputChange('last_name', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={formData.email}
            onChangeText={(text) => handleInputChange('email', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Contact Number"
            value={formData.contact_number}
            onChangeText={(text) => handleInputChange('contact_number', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={formData.address}
            onChangeText={(text) => handleInputChange('address', text)}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Location"
            value={formData.location}
            onChangeText={(text) => handleInputChange('location', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="City"
            value={formData.city}
            onChangeText={(text) => handleInputChange('city', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Notes (Optional)"
            value={formData.notes}
            onChangeText={(text) => handleInputChange('notes', text)}
          />
          {/* Checkout button */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleCheckout}
            // onPress={() => navigation.navigate('InvoiceStack')}
            disabled={loading}>
            <Text style={styles.buttonText}>{loading ? 'Processing...' : 'Checkout'}</Text>
          </TouchableOpacity>
          {/* Loading indicator */}
          {loading && <ActivityIndicator size="large" color="#007bff" style={{ marginTop: 20 }} />}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = {
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
};

export default CheckoutScreen;
