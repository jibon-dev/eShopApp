import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{flex: 1}} />
      <ScrollView>
        <View style={styles.logoSection}>
          {/* <Image
            source={require('../assets/belaseaLogo.png')}
            style={styles.logoSize}
          /> */}
          <Text>Image</Text>
        </View>
        <View style={styles.contactUsForm}>
          <TextInput
            placeholder="Enter your E-mail"
            style={styles.input}
            selectionColor="#183153"
          />

          <TextInput
            placeholder="Enter your password"
            style={styles.input}
            selectionColor="#183153"
            secureTextEntry={true}
          />
          <View style={styles.styleRegisterBtn}>
            <TouchableOpacity>
              <Text style={styles.sendMessage}>Sign in</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.styleLoginBtn}>
            <Text style={styles.loginText}>Don't have an account yet ?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignupStack')}>
              <Text style={styles.signInBtn}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.orText}>OR</Text>
          <TouchableOpacity style={styles.facebookContainer}>
            <Text style={styles.facebookText}>Login with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gmailBtn}>
            <Text style={styles.gmailText}>Login with Facebook</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#183153',
    color: '#FFF',
    padding: 10,
  },

  logoSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoSize: {
    width: 200,
    height: 200,
  },

  contactUsForm: {
    borderWidth: 1,
    borderColor: '#E9EBEC',
    borderRadius: 10,
    padding: 5,
  },
  input: {
    height: 45,
    margin: 8,
    padding: 10,
    borderRadius: 5,
    borderColor: '#E9EBEC',
    backgroundColor: '#E9EBEC',
  },
  styleRegisterBtn: {
    borderRadius: 10,
    padding: 10,
  },
  sendMessage: {
    padding: 10,
    backgroundColor: '#FFF',
    textAlign: 'center',
    borderRadius: 8,
    fontWeight: 'bold',
    borderColor: '#FFF',
    color: '#000',
    overflow: 'hidden',
  },
  styleLoginBtn: {
    margin: 20,
  },
  loginText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFF',
  },
  signInBtn: {
    marginTop: 10,
    padding: 5,
    backgroundColor: '#FFF',
    textAlign: 'center',
    borderRadius: 8,
    fontWeight: 'bold',
    borderColor: '#FFF',
    color: '#000',
    overflow: 'hidden',
    width: 100,
    alignSelf: 'center',
  },
  facebookContainer: {
    marginTop: 10,
    backgroundColor: '#4267B2', // Facebook blue color
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebookText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  gmailBtn: {
    marginTop: 10,
    backgroundColor: '#D44638', // Facebook blue color
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gmailText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    margin: 10,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default LoginScreen;
