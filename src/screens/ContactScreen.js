import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

// Api Call
import {BASE_URL} from '../api/api';

const ContactScreen = () => {
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isPending, setPending] = useState(false);

  const onClickFormHandler = () => {
    let data = {subject, name, phone, email, message};
    setPending(true);
    fetch(`${BASE_URL}/api/contact-us/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(resp => {
      resp.json().then(() => {
        setSubject('');
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
        setPending(false);
      });
    });
  };

  return (
    <SafeAreaView style={styles.contactUsContainer}>
      <ScrollView>
        {/* Contact Form */}
        <View style={styles.contactUsForm}>
          <TextInput
            placeholder="Subject *"
            style={styles.input}
            value={subject}
            selectionColor="#183153"
            onChangeText={setSubject}
          />
          <TextInput
            placeholder="Full Name *"
            style={styles.input}
            value={name}
            selectionColor="#183153"
            onChangeText={setName}
          />
          <TextInput
            placeholder="E-mail *"
            style={styles.input}
            value={email}
            selectionColor="#183153"
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Phone *"
            style={styles.input}
            value={phone}
            selectionColor="#183153"
            onChangeText={setPhone}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="Write your message *"
            multiline={true}
            style={styles.textArea}
            value={message}
            selectionColor="#183153"
            onChangeText={setMessage}
          />
          <View style={styles.styleLoginBtn}>
            <TouchableOpacity onPress={onClickFormHandler}>
              {!isPending && (
                <Text style={styles.sendMessage}>Send Message</Text>
              )}
              {isPending && (
                <Text style={styles.sendMessage}>Data Sending ..... </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
        {/* Contact Address */}
        <View style={styles.contactUsAddress}>
          <Text style={styles.contactUsAddressTitle}>Address</Text>
          <View style={{margin: 10}}>
            <Text>Eastern Kamalapur Complex</Text>
            <Text>64-68 North Kamlapur</Text>
            <Text>2nd Floor, room 218</Text>
            <Text>Motijheel, Dhaka-1000</Text>
            <Text>Bangladesh</Text>
          </View>
          <Text style={styles.contactUsAddressPhone}>Phone</Text>
          <View style={styles.contactUsAddressPhoneList}>
            <Text>+88 01305-606540</Text>
          </View>
          <Text style={styles.contactUsAddressEmail}>E-mail</Text>
          <View>
            <Text>help.belasea@gmail.com</Text>
          </View>
        </View>
        {/* Contact Google Map */}
        <View style={styles.map}>
          <Image source={require('../assets/google.png')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contactUsContainer: {
    flex: 1,
  },
  contactUsHeader: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  contactUsSubTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    borderBottomWidth: 2,
    marginLeft: 12,
    marginRight: 12,
    borderBottomColor: '#293352',
  },
  contactTitle: {
    width: '50%',
    backgroundColor: '#D9D9D9',
    padding: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  contactHide: {
    width: '50%',
    backgroundColor: '#D9D9D9',
    padding: 20,
    fontSize: 24,
    textAlign: 'right',
  },
  contactHideTitle: {
    fontSize: 17,
    backgroundColor: '#9ABAD7',
  },
  contactUsForm: {
    margin: 2,
  },
  input: {
    height: 50,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: '#D9D9D9',
  },
  textArea: {
    height: 60,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#D9D9D9',
  },
  styleLoginBtn: {
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  sendMessage: {
    padding: 7,
    backgroundColor: '#183153',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    fontWeight: 'bold',
    borderColor: '#183153',
    color: '#FFF',
  },
  contactUsAddress: {
    flex: 1,
    margin: 15,
  },
  contactUsAddressList: {
    margin: 10,
  },
  contactUsAddressTitle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  contactUsAddressPhone: {
    marginTop: 8,
    fontWeight: 'bold',
    fontSize: 24,
  },
  contactUsAddressPhoneList: {
    margin: 10,
  },
  contactUsAddressEmail: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 24,
  },
  map: {
    // width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height,
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 30,
  },
});

export default ContactScreen;
