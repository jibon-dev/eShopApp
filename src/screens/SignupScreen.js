import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const SignupScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.logoSection}>
          {/* <Image
            source={require('../assets/belaseaLogo.png')}
            style={styles.logoSize}
          /> */}
          <Text style={styles.register}>Register your account</Text>
        </View>
        <View style={styles.contactUsForm}>
          <View style={{marginTop: 9}} />
          <TextInput
            placeholder="First Name *"
            style={styles.input}
            selectionColor="#183153"
          />

          <TextInput
            placeholder="Last name *"
            style={styles.input}
            selectionColor="#183153"
          />
          <TextInput
            placeholder="Contact Number *"
            keyboardType="numeric"
            style={styles.input}
            selectionColor="#183153"
          />
          <TextInput
            placeholder="E-mail *"
            style={styles.input}
            selectionColor="#183153"
          />
          <TextInput
            placeholder="Enter your password *"
            style={styles.input}
            selectionColor="#183153"
          />
          <View style={styles.styleRegisterBtn}>
            <TouchableOpacity>
              <Text style={styles.sendMessage}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.styleLoginBtn}>
            <Text style={styles.loginText}>I have already an account </Text>
            <TouchableOpacity onPress={() => navigation.navigate('LoginStack')}>
              <Text style={styles.signInBtn}>Sign in</Text>
            </TouchableOpacity>
          </View>
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
    color: '#007036',
    padding: 10,
  },
  textMessage: {
    margin: 1,
  },

  register: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    margin: 10,
    color: '#FFF',
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
    backgroundColor: '#E9EBEC',
    textAlign: 'center',
    borderRadius: 8,
    fontWeight: 'bold',
    borderColor: '#E9EBEC',
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
    backgroundColor: '#E9EBEC',
    textAlign: 'center',
    borderRadius: 8,
    fontWeight: 'bold',
    borderColor: '#E9EBEC',
    color: '#000',
    overflow: 'hidden',
    width: 100,
    alignSelf: 'center',
  },
  logoSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoSize: {
    width: 200,
    height: 200,
  },
});

export default SignupScreen;
