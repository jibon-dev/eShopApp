import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  View,
} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';
import {useState, useContext} from 'react';
import {CartContext} from '../../contexts/CartContext';
import {BASE_URL} from '../../api/api';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  first_name: yup.string().required('First Name is Required'),
  last_name: yup.string().required('Last Name is Required'),
  address: yup.string().required('Address is Required'),

  contact_number: yup
    .string()
    .required('Phone number is required')
    .matches(/^(01[0-9]{9}|8801[0-9]{9})$/, 'Invalid Bangladeshi phone number'),

  location: yup.string().required('Location is Required'),
  city: yup.string().required('City is Required'),
});

const CheckoutForm = ({navigation, deliveryCharge, deliveryMethod}) => {
  const [loader, setLoader] = useState(false);

  const {items, getItemsCount, getTotalPrice, setItems, location, setLocation} =
    useContext(CartContext);

  const stockOutAlert = list => {
    const e = [];
    for (let i = 0; i < list.length; i++) {
      e.push(list[i], '\n\n');
    }
    alert(e);
  };

  const leftStockOutAlert = list => {
    const e = [];
    for (let i = 0; i < list.length; i++) {
      e.push(list[i], '\n\n');
    }
    alert(e);
  };

  const showInvoiceErrorAlert = () => {
    Alert.alert('Oops..', 'Please Try again', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Ok',
        onPress: () => console.log('Ok Pressed'),
      },
    ]);
  };

  const showLocationErrorAlert = () => {
    Alert.alert('', 'Please Select a Delivery Area!', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Ok',
        onPress: () => console.log('Ok Pressed'),
      },
    ]);
  };

  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={{
        first_name: '',
        last_name: '',
        email: '',
        address: '',
        address_type: '',
        contact_number: '',
        location: '',
        city: '',
        notes: '',
      }}
      onSubmit={(values, {resetForm}) => {
        setLoader(true);
        let itemListNew = [];
        items.map(item => {
          fetch(`${BASE_URL}/products/api/${item.product.slug}/`)
            .then(response => response.json())
            .then(() => {
              let cartItemObj = {
                id: item.product.id,
                title: item.product.title,
                brand: item.product.brand,
                product_image: item.product.image,
                app_price: item.product.app_price,
                weight: item.product.weight,
                buy_one_get_one: item.product.buy_one_get_one,
                limit_buy: item.product.limit_buy,
                active: item.product.active,
                quantity: item.qty,
              };
              itemListNew.push(cartItemObj);
            });
        });

        setTimeout(async () => {
          if (location === '') {
            showLocationErrorAlert();
            setLoader(false);
            return;
          }

          if (itemListNew.length > 0) {
            try {
              const response = await fetch(
                `${BASE_URL}/invoices/api/cart-checkout-api-view/`,
                {
                  method: 'POST',
                  headers: {'Content-type': 'application/json'},
                  body: JSON.stringify({
                    first_name: values.first_name,
                    last_name: values.last_name,
                    address: values.address,
                    address_type: values.address_type,
                    email: values.email,
                    contact_number: values.contact_number,
                    location: values.location,
                    gender: 'F',
                    // is_login_user: true,
                    // login_user_id: user.id,
                    city: values.city,
                    notes: values.notes,
                    delivery_method: deliveryMethod,
                    delivery_charge: parseInt(deliveryCharge),
                    count: getItemsCount(),
                    total: getTotalPrice() + parseInt(deliveryCharge),
                    platform: 'Mobile',
                    cart_list: itemListNew,
                  }),
                },
              );
              const data = await response.json();
              if (data.stock_out_list) {
                stockOutAlert(data.stock_out_list);
                setLoader(false);
                navigation.navigate('CartStack', {
                  screen: 'Cart',
                });
              }
              if (data.left_stock_list) {
                leftStockOutAlert(data.left_stock_list);
                setLoader(false);
                navigation.navigate('CartStack', {
                  screen: 'Cart',
                });
              }
              if (data.context.success === true) {
                navigation.navigate('InvoiceStack', {
                  screen: 'Invoice',
                  params: {
                    InvoiceId: data.context.invoiceId,
                  },
                });
                setItems([]);
                setLoader(false);
                setLocation('');
                resetForm();
              } else {
                showInvoiceErrorAlert();
              }
            } catch (e) {
              setLoader(false);
              showInvoiceErrorAlert();
            }
          }
        }, 1000);
      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors, isValid}) => (
        
      )}
    </Formik>
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
