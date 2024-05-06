// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   StyleSheet,
//   Image,
//   Text,
//   TouchableOpacity,
//   Platform,
// } from 'react-native';
// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItem,
// } from '@react-navigation/drawer';
// import BottomTabNavigator from './BottomTabNavigator';
// import {screens} from './RouteItems';
// import {useDrawerStatus} from '@react-navigation/drawer';

// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import AntDesign from 'react-native-vector-icons/AntDesign';

// const Drawer = createDrawerNavigator();

// const CustomDrawerContent = props => {
//   const currentRouteName = props.nav()?.getCurrentRoute()?.name;

//   const isDrawerOpen = useDrawerStatus() === 'open';

//   const [nestedDrawerItem, setNestedDrawerItem] = useState(false);
//   const [categoryFocus, setCategoryFocus] = useState(false);

//   // perfume
//   const [nestedItemDrawerItem, setNestedItemDrawerItem] = useState(false);
//   const [nestedFocus, setNestedFocus] = useState(false);

//   useEffect(() => {
//     if (isDrawerOpen === false) {
//       setNestedDrawerItem(false);
//     }
//   }, [isDrawerOpen]);

//   // Nested Focus
//   const nestedDrawerItemFUN = () => {
//     if (nestedDrawerItem === true) {
//       setNestedDrawerItem(false);
//     } else {
//       setNestedDrawerItem(true);
//     }
//   };

//   const handleNestedItemDrawerItem = () => {
//     if (nestedItemDrawerItem === true) {
//       setNestedItemDrawerItem(false);
//     } else {
//       setNestedItemDrawerItem(true);
//     }
//   };

//   return (
//     <DrawerContentScrollView {...props}>
//       {/*Home*/}
//       <DrawerItem
//         label={() => (
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyItems: 'center',
//               alignItems: 'center',
//             }}>
//             <AntDesign name="leftcircleo" size={20} color="#007036" />
//             {/* <Image source={require('../assets/icon/belaface.png')}
//                                resizeMode="cover"
//                                style={{maxWidth: '80%', maxHeight: 25, marginLeft: 10}}
//                         /> */}
//             <Text> Application Name</Text>
//           </View>
//         )}
//         onPress={() => props.navigation.navigate('Home')}
//         style={styles.drawerItem2}
//       />

//       <DrawerItem
//         label={() => (
//           <View>
//             <View style={{flexDirection: 'row'}}>
//               <Text
//                 style={[
//                   categoryFocus
//                     ? styles.drawerLabelFocused
//                     : styles.drawerLabel,
//                   {color: '#007036'},
//                 ]}>
//                 Contact Us
//               </Text>
//               {nestedDrawerItem === true ? (
//                 <AntDesign
//                   name="minus"
//                   size={24}
//                   color={categoryFocus ? '#007036' : '#007036'}
//                 />
//               ) : (
//                 <AntDesign
//                   name="plus"
//                   size={24}
//                   color={categoryFocus ? '#007036' : '#007036'}
//                 />
//               )}
//             </View>
//           </View>
//         )}
//         onPress={() => {
//           setCategoryFocus(true);
//           nestedDrawerItemFUN();
//         }}
//         style={categoryFocus ? styles.drawerItemFocused : styles.drawerItem}
//       />

//       <View style={styles.drawerNestedItemContainer}>
//         {nestedDrawerItem && (
//           <DrawerItem
//             label={() => <Text style={styles.drawerLabel}>Message</Text>}
//             onPress={() => props.navigation.navigate('MessageStack')}
//           />
//         )}
//         {nestedDrawerItem && (
//           <DrawerItem
//             label={() => <Text style={styles.drawerLabel}>Contact Us</Text>}
//             onPress={() => props.navigation.navigate('ContactStack')}
//           />
//         )}
//       </View>

//       {/*/End Category*/}

//       <DrawerItem
//         label={() => (
//           <View>
//             <View style={{flexDirection: 'row'}}>
//               <Text
//                 style={[
//                   nestedFocus ? styles.drawerLabelFocused : styles.drawerLabel,
//                   {color: '#007036'},
//                 ]}>
//                 Need Help
//               </Text>
//               {nestedItemDrawerItem === true ? (
//                 <AntDesign
//                   name="minus"
//                   size={24}
//                   color={nestedFocus ? '#007036' : '#007036'}
//                 />
//               ) : (
//                 <AntDesign
//                   name="plus"
//                   size={24}
//                   color={nestedFocus ? '#007036' : '#007036'}
//                 />
//               )}
//             </View>
//           </View>
//         )}
//         onPress={() => {
//           setNestedFocus(true);
//           handleNestedItemDrawerItem();
//         }}
//         style={categoryFocus ? styles.drawerItemFocused : styles.drawerItem}
//       />

//       <View style={styles.drawerNestedItemContainer}>
//         {nestedItemDrawerItem && (
//           <DrawerItem
//             label={() => <Text style={styles.drawerLabel}>FAQ</Text>}
//             onPress={() => props.navigation.navigate('FAQStack')}
//           />
//         )}
//         {nestedItemDrawerItem && (
//           <DrawerItem
//             label={() => <Text style={styles.drawerLabel}>Call</Text>}
//             onPress={() => props.navigation.navigate('CallStack')}
//           />
//         )}
//       </View>
//       {/*/End Category*/}

//       {/*About Us*/}
//       <DrawerItem
//         label={() => <Text style={styles.drawerLabel2}>About Us</Text>}
//         onPress={() => props.navigation.navigate('AboutStack')}
//         style={styles.drawerItem2}
//       />
//     </DrawerContentScrollView>
//   );
// };

// const DrawerNavigator = ({nav}) => {
//   return (
//     <Drawer.Navigator
//       screenOptions={({navigation}) => ({
//         headerStyle: {
//           backgroundColor: '#184772',
//           ...Platform.select({
//             ios: {
//               height: 50,
//             },
//             android: {
//               height: 50,
//             },
//           }),
//         },
//         headerLeft: () => (
//           <TouchableOpacity
//             onPress={() => navigation.toggleDrawer()}
//             style={styles.headerLeft}>
//             <FontAwesome
//               name="bars"
//               size={25}
//               color="#fff"
//               style={{padding: 5}}
//             />
//           </TouchableOpacity>
//         ),
//         swipeEdgeWidth: 0,
//         drawerStyle: {flex: 1, width: '70%', paddingRight: 10},
//         headerShown: false,
//       })}
//       drawerContent={props => <CustomDrawerContent {...props} nav={nav} />}>
//       <Drawer.Screen name={screens.HomeTab} component={BottomTabNavigator} />
//     </Drawer.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   // Troggle
//   headerLeft: {
//     marginLeft: 10,
//   },

//   headerImage: {
//     ...Platform.select({
//       ios: {
//         width: 150,
//         height: 20,
//       },
//       android: {
//         width: 150,
//         height: 20,
//       },
//     }),
//   },

//   headerTitle: {
//     fontWeight: 'bold',
//     marginLeft: 10,
//     color: '#FFF',
//   },

//   headerRight: {
//     marginRight: 15,
//   },
//   // drawer content
//   drawerLabel: {
//     fontSize: 14,
//     width: '100%',
//     fontWeight: '500',
//   },
//   drawerLabel2: {
//     fontSize: 14,
//     width: '100%',
//     color: '#007036',
//     fontWeight: '500',
//   },
//   drawerLabelFocused: {
//     fontSize: 14,
//     fontWeight: '500',
//     width: '100%',
//     color: '#000',
//   },
//   drawerItem: {
//     height: 50,
//     justifyCenter: 'center',
//     backgroundColor: '#E9EBEC',
//     color: '#007036',
//   },
//   drawerItem2: {
//     backgroundColor: '#E9EBEC',
//     color: '#007036',
//   },

//   drawerItemFocused: {
//     backgroundColor: '#E9EBEC',
//     color: '#007036',
//   },
//   white: {
//     color: 'white',
//   },
//   drawerNestedItemContainer: {
//     marginLeft: 20,
//   },
//   touchableButton: {
//     borderRadius: 50,
//     backgroundColor: '#FFF',
//     overflow: 'hidden',
//   },
// });

// export default DrawerNavigator;


import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

// Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import BottomTabNavigator from './BottomTabNavigator';
import {screens} from './RouteItems';
import {useState} from 'react';

import {useDrawerStatus} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  const currentRouteName = props.nav()?.getCurrentRoute()?.name;

  const isDrawerOpen = useDrawerStatus() === 'open';

  const [nestedDrawerItem, setNestedDrawerItem] = useState(false);

  const [nestedSkinCareDrawerItem, setNestedSkinCareDrawerItem] =
    useState(false);

  const [nestedMakeupDrawerItem, setNestedMakeupDrawerItem] = useState(false);

  const [nestedHairCareDrawerItem, setNestedHairCareDrawerItem] =
    useState(false);
  const [nestedPerfumeDrawerItem, setNestedPerfumeDrawerItem] = useState(false);

  const [skinCareFocus, setSkinCareFocus] = useState(false);
  const [makeupFocus, setMakeupFocus] = useState(false);
  const [hairCareFocus, setHairCareFocus] = useState(false);
  const [perfumeFocus, setPerfumeFocus] = useState(false);

  useEffect(() => {
    if (isDrawerOpen === false) {
      setNestedSkinCareDrawerItem(false);
      setNestedMakeupDrawerItem(false);
      setNestedHairCareDrawerItem(false);
      setNestedPerfumeDrawerItem(false);
    }
  }, [isDrawerOpen]);

  const nestedDrawerItemFUN = () => {
    if (nestedDrawerItem === true) {
      setNestedDrawerItem(false);
    } else {
      setNestedDrawerItem(true);
    }
  };

  // Nested Skin Care
  const nestedSkinCareDrawerItemFocusFUN = () => {
    // console.log("This one is called");
    if (nestedSkinCareDrawerItem === true) {
      setNestedSkinCareDrawerItem(false);
    } else {
      setNestedSkinCareDrawerItem(true);
    }
  };

  // Nested Hair Care
  const nestedHairCareDrawerItemFUN = () => {
    if (nestedHairCareDrawerItem === true) {
      setNestedHairCareDrawerItem(false);
    } else {
      setNestedHairCareDrawerItem(true);
    }
  };

  // Nested Perfume Focus
  const nestedPerfumeDrawerItemFUN = () => {
    if (nestedPerfumeDrawerItem === true) {
      setNestedPerfumeDrawerItem(false);
    } else {
      setNestedPerfumeDrawerItem(true);
    }
  };

  // Nested Makeup
  const nestedMakeupDrawerItemFUN = () => {
    if (nestedMakeupDrawerItem === true) {
      setNestedMakeupDrawerItem(false);
    } else {
      setNestedMakeupDrawerItem(true);
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      {/*Home*/}
      <DrawerItem
        key="Home"
        label={() => (
          <View style={{flexDirection: 'row'}}>
            <AntDesign name="leftcircleo" size={20} color="#FFF" />
            <Image
              source={require('../assets/headerLogo.png')}
              style={{width: '80%', height: 20, marginLeft: 20}}
            />
          </View>
        )}
        onPress={() => props.navigation.navigate('Home')}
        style={styles.drawerItem2}
      />

      {/*Offer*/}
      <DrawerItem
        key="ProductOfferList"
        label={() => <Text style={styles.drawerLabel2}>Offers</Text>}
        onPress={() =>
          props.navigation.navigate('ProductListStack', {
            screen: 'ProductList',
            params: {
              query: 'product-offer/offer',
            },
          })
        }
        style={styles.drawerItem2}
      />

      {/*Start Skin care*/}
      <DrawerItem
        key="SkinCare"
        label={() => (
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={[
                  perfumeFocus ? styles.drawerLabelFocused : styles.drawerLabel,
                  {color: '#FFF'},
                ]}>
                Skin Care
              </Text>
              {nestedSkinCareDrawerItem === true ? (
                <AntDesign
                  name="minus"
                  size={24}
                  color={skinCareFocus ? '#FFF' : '#FFF'}
                />
              ) : (
                <AntDesign
                  name="plus"
                  size={24}
                  color={skinCareFocus ? '#FFF' : '#FFF'}
                />
              )}
            </View>
          </View>
        )}
        onPress={() => {
          setSkinCareFocus(true);
          nestedSkinCareDrawerItemFocusFUN();
        }}
        // style={[styles.drawerItem, skinCareFocus ? styles.drawerItemFocused : null]}
        style={skinCareFocus ? styles.drawerItemFocused : styles.drawerItem}
      />
      <View style={styles.drawerNestedItemContainer}>
        {nestedSkinCareDrawerItem && (
          <DrawerItem
            key="ProductList"
            label={() => (
              // <Text style={skinCareDrawerItemFocus ? styles.drawerLabelFocused : styles.drawerLabel}>
              <Text style={styles.drawerLabel}>All Skin Care</Text>
            )}
            onPress={() =>
              props.navigation.navigate('ProductListStack', {
                screen: 'ProductList',
                params: {query: 'category/skin-care'},
              })
            }
            // style={[styles.drawerItem, skinCareDrawerItemFocus ? styles.drawerItemFocused : null]}
          />
        )}
        {nestedSkinCareDrawerItem && (
          <DrawerItem
            key="body"
            label={() => <Text style={styles.drawerLabel}>Body</Text>}
            onPress={() =>
              props.navigation.navigate('ProductListByCategoryStack', {
                screen: 'ProductListByCategory',
                params: {query: 'skin-care/body'},
              })
            }
          />
        )}
        {nestedSkinCareDrawerItem && (
          <DrawerItem
            key="skinCareEyes"
            label={() => <Text style={styles.drawerLabel}>Eyes</Text>}
            onPress={() =>
              props.navigation.navigate('ProductListStack', {
                screen: 'ProductList',
                params: {query: 'skin-care/eyes'},
              })
            }
          />
        )}
        {nestedSkinCareDrawerItem && (
          <DrawerItem
            key="skinCareFace"
            label={() => <Text style={styles.drawerLabel}>Face</Text>}
            onPress={() =>
              props.navigation.navigate('ProductListByCategoryStack', {
                screen: 'ProductListByCategory',
                params: {query: 'skin-care/face'},
              })
            }
          />
        )}
        {nestedSkinCareDrawerItem && (
          <DrawerItem
            key="Hands"
            label={() => <Text style={styles.drawerLabel}>Hands</Text>}
            onPress={() =>
              props.navigation.navigate('ProductListStack', {
                screen: 'ProductList',
                params: {query: 'skin-care/hands'},
              })
            }
          />
        )}
        {nestedSkinCareDrawerItem && (
          <DrawerItem
            key="SkinCareLips"
            label={() => <Text style={styles.drawerLabel}>Lips</Text>}
            onPress={() =>
              props.navigation.navigate('ProductListStack', {
                screen: 'ProductList',
                params: {query: 'skin-care/lips'},
              })
            }
          />
        )}
      </View>
      {/*/End Skin care*/}

      {/*Start Makeup*/}
      <DrawerItem
        key="Makeup"
        label={() => (
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={[
                  perfumeFocus ? styles.drawerLabelFocused : styles.drawerLabel,
                  {color: '#FFF'},
                ]}>
                Makeup
              </Text>
              {nestedMakeupDrawerItem === true ? (
                <AntDesign
                  name="minus"
                  size={24}
                  color={makeupFocus ? '#FFF' : '#FFF'}
                />
              ) : (
                <AntDesign
                  name="plus"
                  size={24}
                  color={makeupFocus ? '#FFF' : '#FFF'}
                />
              )}
            </View>
          </View>
        )}
        onPress={() => {
          setMakeupFocus(true);
          nestedMakeupDrawerItemFUN();
        }}
        style={makeupFocus ? styles.drawerItemFocused : styles.drawerItem}
      />

      <View style={styles.drawerNestedItemContainer}>
        {/*Makeup : All Makeup */}
        {nestedMakeupDrawerItem && (
          <DrawerItem
            key="AllMakeup"
            label={() => <Text style={styles.drawerLabel}>All Makeup</Text>}
            onPress={() =>
              props.navigation.navigate('ProductListStack', {
                screen: 'ProductList',
                params: {query: 'category/makeup'},
              })
            }
          />
        )}

        {/*Eyes : 'makeup/eyes' */}
        {nestedMakeupDrawerItem && (
          <DrawerItem
            key="MakeupEyes"
            label={() => <Text style={styles.drawerLabel}>Eyes</Text>}
            onPress={() =>
              props.navigation.navigate('ProductListStack', {
                screen: 'ProductList',
                params: {query: 'makeup/eyes'},
              })
            }
          />
        )}

        {/*Face : 'makeup/face' */}
        {nestedMakeupDrawerItem && (
          <DrawerItem
            key="MakeupFace"
            label={() => <Text style={styles.drawerLabel}>Face</Text>}
            onPress={() =>
              props.navigation.navigate('ProductListStack', {
                screen: 'ProductList',
                params: {query: 'makeup/face'},
              })
            }
          />
        )}

        {/*Lips : 'makeup/lips' */}
        {nestedMakeupDrawerItem && (
          <DrawerItem
            key="MakeupLips"
            label={() => <Text style={styles.drawerLabel}>Lips</Text>}
            onPress={() =>
              props.navigation.navigate('ProductListStack', {
                screen: 'ProductList',
                params: {query: 'makeup/lips'},
              })
            }
            // style={styles.drawerItem}
          />
        )}

        {/*Makeup Brush : 'makeup/makeup-brush' */}
        {nestedMakeupDrawerItem && (
          <DrawerItem
            key="MakeupMakeupBrush"
            label={() => <Text style={styles.drawerLabel}>Makeup Brush</Text>}
            onPress={() =>
              props.navigation.navigate('ProductListStack', {
                screen: 'ProductList',
                params: {query: 'makeup/makeup-brush'},
              })
            }
            // style={styles.drawerItem}
          />
        )}
      </View>
      {/*/End Makeup*/}

      {/*Start Hair care*/}
      <DrawerItem
        key="HairCare"
        label={() => (
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={[
                  perfumeFocus ? styles.drawerLabelFocused : styles.drawerLabel,
                  {color: '#FFF'},
                ]}>
                Hair Care
              </Text>
              {nestedHairCareDrawerItem === true ? (
                <AntDesign
                  name="minus"
                  size={24}
                  color={hairCareFocus ? '#FFF' : '#FFF'}
                />
              ) : (
                <AntDesign
                  name="plus"
                  size={24}
                  color={hairCareFocus ? '#FFF' : '#FFF'}
                />
              )}
            </View>
          </View>
        )}
        onPress={() => {
          setHairCareFocus(true);
          nestedHairCareDrawerItemFUN();
        }}
        style={hairCareFocus ? styles.drawerItemFocused : styles.drawerItem}
      />
      <View style={styles.drawerNestedItemContainer}>
        {/*Hair Care : All Hair Care*/}
        {nestedHairCareDrawerItem && (
          <DrawerItem
            key="AllHairCare"
            label={() => <Text style={styles.drawerLabel}>All Hair Care</Text>}
            onPress={() =>
              props.navigation.navigate('ProductListStack', {
                screen: 'ProductList',
                params: {query: 'category/hair-care'},
              })
            }
          />
        )}
        {/*conditioner : 'hair-care/conditioner' */}
        {nestedHairCareDrawerItem && (
          <DrawerItem
            key="Conditioner"
            label={() => <Text style={styles.drawerLabel}>Conditioner</Text>}
            onPress={() =>
              props.navigation.navigate('ProductListStack', {
                screen: 'ProductList',
                params: {query: 'hair-care/conditioner'},
              })
            }
          />
        )}
        {/* hair-colors : 'hair-care/hair-colors' */}
        {nestedHairCareDrawerItem && (
          <DrawerItem
            key="HairColors"
            label={() => <Text style={styles.drawerLabel}>Hair Colors</Text>}
            onPress={() =>
              props.navigation.navigate('ProductListStack', {
                screen: 'ProductList',
                params: {query: 'hair-care/hair-colors'},
              })
            }
            // style={styles.drawerItem}
          />
        )}
        {/*shampoo: 'hair-care/shampoo'*/}
        {nestedHairCareDrawerItem && (
          <DrawerItem
            key="HairShampoo"
            label={() => <Text style={styles.drawerLabel}>Shampoo</Text>}
            onPress={() =>
              props.navigation.navigate('ProductListStack', {
                screen: 'ProductList',
                params: {query: 'hair-care/shampoo'},
              })
            }
            // style={styles.drawerItem}
          />
        )}
      </View>
      {/*/End Skin care*/}

      {/*Start Perfume*/}
      <DrawerItem
        key="Perfume"
        label={() => (
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={[
                  perfumeFocus ? styles.drawerLabelFocused : styles.drawerLabel,
                  {color: '#FFF'},
                ]}>
                Perfume
              </Text>
              {nestedPerfumeDrawerItem === true ? (
                <AntDesign
                  name="minus"
                  size={24}
                  color={perfumeFocus ? '#FFF' : '#FFF'}
                />
              ) : (
                <AntDesign
                  name="plus"
                  size={24}
                  color={perfumeFocus ? '#FFF' : '#FFF'}
                />
              )}
            </View>
          </View>
        )}
        onPress={() => {
          setPerfumeFocus(true);
          nestedPerfumeDrawerItemFUN();
        }}
        style={perfumeFocus ? styles.drawerItemFocused : styles.drawerItem}
      />

      <View style={styles.drawerNestedItemContainer}>
        {/*Perfume : All Perfume */}
        {nestedPerfumeDrawerItem && (
          <DrawerItem
            key="AllPerfume"
            label={() => <Text style={styles.drawerLabel}>All Perfume</Text>}
            onPress={() =>
              props.navigation.navigate('ProductListStack', {
                screen: 'ProductList',
                params: {query: 'category/perfume'},
              })
            }
          />
        )}
        {/*Women : 'perfume/woman' */}
        {nestedPerfumeDrawerItem && (
          <DrawerItem
            key="Woman"
            label={() => <Text style={styles.drawerLabel}>Women</Text>}
            onPress={() =>
              props.navigation.navigate('ProductListStack', {
                screen: 'ProductList',
                params: {query: 'perfume/woman'},
              })
            }
          />
        )}

        {/*Men : 'perfume/men' */}
        {nestedPerfumeDrawerItem && (
          <DrawerItem
            key="Men"
            label={() => <Text style={styles.drawerLabel}>Men</Text>}
            onPress={() =>
              props.navigation.navigate('ProductListStack', {
                screen: 'ProductList',
                params: {query: 'perfume/men'},
              })
            }
          />
        )}
      </View>
      {/*/End Perfume*/}

      {/*Brand*/}
      <DrawerItem
        key="Brand"
        label={() => <Text style={styles.drawerLabel2}>Brands</Text>}
        onPress={() => props.navigation.navigate('BrandStack')}
        style={styles.drawerItem2}
      />

      {/*About Us*/}
      <DrawerItem
        key="About"
        label={() => <Text style={styles.drawerLabel2}>About Us</Text>}
        onPress={() => props.navigation.navigate('AboutStack')}
        style={styles.drawerItem2}
      />
      {/*Contact*/}
      <DrawerItem
        key="Contact"
        label={() => <Text style={styles.drawerLabel2}>Contact Us</Text>}
        onPress={() => props.navigation.navigate('ContactStack')}
        style={styles.drawerItem2}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = ({nav}) => {
  const isHamburgerMenuShow = () => {
    let flag = false;
    let route_name = nav()?.getCurrentRoute()?.name;

    if (typeof route_name === 'undefined') {
      return (flag = true);
    }

    // if (route_name === 'Home' || route_name === 'Welcome') {
    //   return (flag = true);
    // } else if (route_name !== 'Home') {
    //   return (flag = false);
    // }

    if (route_name === 'Home') {
      return (flag = true);
    } else if (route_name !== 'Home') {
      return (flag = false);
    }

    return flag;
  };

  return (
    <Drawer.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {
          backgroundColor: '#183153',
          ...Platform.select({
            ios: {
              height: 50,
            },
            android: {
              height: 50,
            },
          }),
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={styles.headerLeft}>
            <FontAwesome
              name="bars"
              size={25}
              color="#fff"
              style={{padding: 5}}
            />
          </TouchableOpacity>
        ),
        swipeEdgeWidth: 0,
        drawerStyle: {flex: 1, width: '70%', paddingRight: 10},
        headerShown: false,
      })}
      drawerContent={props => <CustomDrawerContent {...props} nav={nav} />}>
      <Drawer.Screen
        name={screens.HomeTab}
        component={BottomTabNavigator}
        options={({navigation}) => ({
          title: 'Home',
          headerTitle: () => (
            <View>
              <Image
                source={require('../assets/headerLogo.png')}
                style={styles.headerImage}
              />
            </View>
          ),
          headerRight: () => (
            <View style={styles.headerRight}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('SearchProductStack', {
                      screen: 'SearchProduct',
                      params: {search_query: ''},
                    })
                  }
                  style={[styles.headerLeft, styles.touchableButton]}>
                  <FontAwesome
                    name="search"
                    size={20}
                    color="#fff"
                    style={{margin: 10}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('UserProfileStack')}
                  style={[styles.headerLeft, styles.touchableButton]}>
                  <FontAwesome
                    name="user"
                    size={20}
                    color="#fff"
                    style={{margin: 10}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ),
        })}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  // Troggle
  headerLeft: {
    marginLeft: 10,
  },
  headerTitle: {
    backgroundColor: 'orange',
  },
  // Belasea Logo
  headerImage: {
    ...Platform.select({
      ios: {
        width: 150,
        height: 20,
      },
      android: {
        width: 150,
        height: 20,
      },
    }),
  },

  belaseaNavHeader: {
    ...Platform.select({
      ios: {
        width: 120,
        height: 0,
        marginTop: 4,
        color: '#FFF',
      },
      android: {
        width: 130,
        height: 20,
        color: '#FFF',
      },
    }),
  },

  belaseaNavTitle: {
    ...Platform.select({
      ios: {
        marginLeft: 30,
        color: '#FFF',
      },
      android: {
        marginLeft: 15,
        color: '#FFF',
      },
    }),
  },
  // User Icon & Search
  headerRight: {
    marginRight: 15,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
    width: '100%',
  },
  drawerLabel2: {
    fontSize: 14,
    width: '100%',
    color: '#FFF',
    backgroundColor: '#183153',
  },
  belasea_icon: {
    textAlign: 'center',
  },
  drawerLabelFocused: {
    fontSize: 14,
    fontWeight: '500',
    width: '100%',
    color: '#FFF',
  },
  drawerItem: {
    height: 50,
    justifyCenter: 'center',
    backgroundColor: '#183153',
    color: '#FFF',
  },
  drawerItem2: {
    backgroundColor: '#183153',
    color: '#FFF',
  },

  drawerItemFocused: {
    backgroundColor: '#183153',
    color: '#FFF',
  },
  white: {
    color: 'white',
  },
  drawerNestedItemContainer: {
    marginLeft: 20,
  },
  touchableButton: {
    borderRadius: 50,
    backgroundColor: '#183153',
    overflow: 'hidden',
  },
});

export default DrawerNavigator;
