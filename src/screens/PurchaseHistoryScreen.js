
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  Linking,
  Platform,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Loader from '../components/Loader/loader';
import { BASE_URL, bela } from '../api/api';

const getPurchaseOrderData = async (number) => {
  const res = await bela(`/api/purchase-order/${number}/`);
  return res.data
};

const PurchaseHistoryScreen = ({navigation}) => {
  const [purchaseOrder, setPurchaseOrder] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const getPurchaseOrderList = () => {
    setLoading(true);
    getPurchaseOrderData(searchQuery)
      .then(data => {
        setPurchaseOrder(data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getPurchaseOrderList();
  }, [searchQuery]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setSearchQuery('');
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.purchaseContainer}>
      <View style={styles.sectionSearch}>
        <TextInput
          name="searchData"
          placeholder="Search by number"
          textAlign="center"
          keyboardType="numeric"
          onChangeText={text => setSearchQuery(text)}
          style={styles.searchStyleInput}
          value={searchQuery}
          selectionColor="#183153"
        />
        <TouchableOpacity>
          <FontAwesome name="search" size={20} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {searchQuery !== '' && (
          <View>
            {loading ? (
              <Loader />
            ) : purchaseOrder.length > 0 ? (
              purchaseOrder.map((item, index) => (
                <View style={styles.card} key={index}>
                  <View style={styles.cardInvoice}>
                    <TouchableOpacity
                      onPress={() => {
                        Linking.openURL(
                          `${BASE_URL}/invoices/list/${item.slug}`,
                        );
                      }}>
                      <Text style={{marginTop: 2}}>
                        <FontAwesome
                          name="file-pdf-o"
                          size={60}
                          color="black"
                        />
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.cardContent}>
                    <Text style={{marginTop: 10, textAlign: 'center'}}>
                      Invoice No : {item.slug}
                    </Text>
                  </View>
                </View>
              ))
            ) : (
              <View style={styles.noPurchase}>
                <FontAwesome name="exclamation-circle" size={40} color="red" />
                <Text style={styles.noPurchaseText}>
                  No matching data found
                </Text>
              </View>
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  purchaseContainer: {
    margin: 10,
  },
  sectionSearch: {
    ...Platform.select({
      ios: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#183153',
        height: 40,
        borderRadius: 15,
        overflow: 'hidden',
        margin: 8,
        textAlign: 'center',
      },
      android: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#183153',
        height: 40,
        borderRadius: 15,
        overflow: 'hidden',
        margin: 8,
        textAlign: 'center',
      },
    }),
  },
  searchStyleInput: {
    flex: 1,
    marginLeft: 10,
  },
  searchIcon: {
    backgroundColor: '#183153',
    color: '#FFF',
    padding: 10,
    height: 40,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  card: {
    borderRadius: 6,
    elevation: 2,
    backgroundColor: '#FFF',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  cardInvoice: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  cardContent: {
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    marginBottom: 2,
  },
  noPurchase: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noPurchaseText: {
    marginTop: 10,
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});

export default PurchaseHistoryScreen;
