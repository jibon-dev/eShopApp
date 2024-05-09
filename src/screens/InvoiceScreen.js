// import React, {useState, useEffect} from 'react';
// import {SafeAreaView, StyleSheet, ActivityIndicator, View} from 'react-native';
// import Invoice from '../components/Invoice/Invoice';
// import { BASE_URL } from '../api/api';

// const InvoiceScreen = ({route, navigation}) => {
//   const [loading, setLoading] = useState(true);
//   const [invoiceData, setInvoiceData] = useState([]);

//   useEffect(() => {
//     const fetchInvoiceData = async () => {
//       try {
//         const res = await fetch(`${BASE_URL}/invoices/api/checkout-api/`);
//         const data = await res.json();
//         setInvoiceData(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching invoice data:', error);
//         setLoading(false);
//       }
//     };
//     fetchInvoiceData();
//   }, []);
 
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {loading ? (
//         <View style={styles.container}>
//           <ActivityIndicator size="large" color="#183153'" />
//         </View>
//       ) : (
//         <Invoice invoiceData={invoiceData} navigation={navigation} />
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     justifyContent:"center",
//     alignItems:"center"
//   },
//   safeArea: {
//     flex: 1,
//     overflow: 'hidden',
//   },
// });

// export default InvoiceScreen;



import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native'
import { getInvoice } from '../api/Invoice/Invoice';


import Loader from '../components/Loader/loader';
import Invoice from '../components/Invoice/Invoice';

const InvoiceScreen = ({route, navigation}) => {
    const [invoiceData, setInvoiceData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function sleep() {
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
        sleep();

        getInvoice(route.params.InvoiceId).then((data) => {
            setInvoiceData(data);
            setLoading(false)
        }).catch((error) => {
            console.log(error)
        })
    }, [route.params?.InvoiceId]);

    return (
        <SafeAreaView style={styles.safeArea}>
            {
                loading
                    ?
                    <Loader/>
                    :
                    <Invoice invoiceData={invoiceData} navigation={navigation}/>
            }
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        overflow: 'hidden',
    },
});

export default InvoiceScreen;
