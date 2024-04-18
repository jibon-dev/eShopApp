import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Platform,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import {BASE_URL} from '../../api/api';

// Icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Invoice = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.invoiceSpace}>
            <Text style={styles.thankYou}>Congratulations !</Text>
            <Text style={styles.iconStyle}>
              <FontAwesome name="check-circle-o" size={80} color="green" />
            </Text>
            <Text style={styles.orderCompleted}>
              Your order has been placed
            </Text>
            <Text style={styles.contactSoon}>We will contact you soon</Text>
            <View style={styles.billingCard}>
              <Text style={styles.orderSummary}>Summary of your Order</Text>
              <View style={styles.orderSummaryContent}>
                <View style={styles.orderSummaryLeftContent}>
                  <Text style={styles.textInfo}>Invoice no</Text>
                </View>
                <View style={styles.orderSummaryRightContent}>
                  <Text>: ee</Text>
                </View>
              </View>
              <View style={styles.orderSummaryContent}>
                <View style={styles.orderSummaryLeftContent}>
                  <Text style={styles.textInfo}>Phone no</Text>
                </View>
                <View style={styles.orderSummaryRightContent}>
                  <Text>: 44</Text>
                </View>
              </View>
              <View style={styles.orderSummaryContent}>
                <View style={styles.orderSummaryLeftContent}>
                  <Text style={styles.textInfo}>Amount to be paid</Text>
                </View>
                <View style={styles.orderSummaryRightContent}>
                  <Text>: 700 ৳</Text>
                </View>
              </View>
              <View style={styles.orderSummaryContent}>
                <View style={styles.orderSummaryLeftContent}>
                  <Text style={styles.textInfo}>Address</Text>
                </View>
                <View style={styles.orderSummaryRightContent}>
                  <Text>Add</Text>
                </View>
              </View>
              <View style={styles.orderSummaryContent}>
                <View style={styles.orderSummaryLeftContent}>
                  <Text style={styles.textInfo}>Track your order</Text>
                </View>
                <View style={styles.orderSummaryRightContent}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('TrackingMyParcelStack')
                    }>
                    <Text style={styles.textInfo}>: Click Here</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.textMessage}>
                <Text style={styles.textInfo}>Note : </Text>
                Dear Sir/Ma'am, payment are cash on delivery. Please check your
                products in front of the delivery man. For any help, please call
                as @ 01305-606540.
              </View>
            </View>

            <View style={styles.downloadIInvoice}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`${BASE_URL}/invoices/list/`);
                }}>
                <Text style={styles.downloadInvoiceButton}>Print Invoice</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.showMore}>
              <TouchableOpacity
                onPress={() => navigation.navigate('HomeStack')}>
                <Text style={styles.shopMoreBtn}>Shop More</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        marginBottom: '0%',
      },
      android: {
        marginBottom: 0,
      },
    }),
    margin: 5,
    // backgroundColor: "red"
  },
  invoiceSpace: {marginTop: 40},
  iconStyle: {
    textAlign: 'center',
    marginTop: 10,
  },
  contactSoon: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 2,
  },
  textInfo: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  textMessage: {
    marginTop: 4,
    textAlign: 'justify',
  },

  billing: {
    flex: 1,
  },
  billingCard: {
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    overflow: 'hidden',
    marginHorizontal: 2,
    marginVertical: 4,
    padding: 10,
    marginTop: 10,
  },
  thankYou: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  orderCompleted: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
  orderSummary: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderSummaryContent: {
    flexDirection: 'row',
  },
  orderSummaryLeftContent: {
    width: '40%',
  },
  orderSummaryRightContent: {
    width: '50%',
  },
  downloadIInvoice: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  downloadInvoiceButton: {
    padding: 7,
    backgroundColor: '#183153',
    color: '#FFF',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    fontWeight: 'bold',
    borderColor: '#183153',
    marginTop: 20,
  },
  showMore: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shopMoreBtn: {
    padding: 7,
    backgroundColor: '#183153',
    color: '#FFF',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    fontWeight: 'bold',
    borderColor: '#183153',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Invoice;
