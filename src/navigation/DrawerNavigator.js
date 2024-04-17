import React, {useEffect, useState} from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity, Platform} from 'react-native'
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import BottomTabNavigator from './BottomTabNavigator'
import {screens} from './RouteItems'
import {useDrawerStatus} from '@react-navigation/drawer';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
    const currentRouteName = props.nav()?.getCurrentRoute()?.name;

    const isDrawerOpen = useDrawerStatus() === 'open';

    const [nestedDrawerItem, setNestedDrawerItem] = useState(false);
    const [categoryFocus, setCategoryFocus] = useState(false);

    // perfume
    const [nestedItemDrawerItem, setNestedItemDrawerItem] = useState(false);
    const [nestedFocus, setNestedFocus] = useState(false);

    useEffect(() => {
        if (isDrawerOpen === false) {
            setNestedDrawerItem(false);
        }
    }, [isDrawerOpen]);


    // Nested Focus
    const nestedDrawerItemFUN = () => {
        if (nestedDrawerItem === true) {
            setNestedDrawerItem(false)
        }
        else {
            setNestedDrawerItem(true)
        }
    };

    const handleNestedItemDrawerItem = () => {
        if (nestedItemDrawerItem === true) {
            setNestedItemDrawerItem(false)
        }
        else {
            setNestedItemDrawerItem(true)
        }
    };


    return (
        <DrawerContentScrollView {...props}>
            {/*Home*/}
            <DrawerItem
                label={() => (
                    <View style={{flexDirection: "row", justifyItems: "center", alignItems: "center"}}>
                        <AntDesign name="leftcircleo" size={20} color="#007036"/>
                        {/* <Image source={require('../assets/icon/belaface.png')}
                               resizeMode="cover"
                               style={{maxWidth: '80%', maxHeight: 25, marginLeft: 10}}
                        /> */}
                        <Text> Application Name</Text>
                    </View>
                )}
                onPress={() => props.navigation.navigate('Home')}
                style={styles.drawerItem2}
            />

            <DrawerItem
                label={() => (
                    <View>
                        <View style={{flexDirection: 'row'}}>
                            <Text
                                style={[categoryFocus ? styles.drawerLabelFocused : styles.drawerLabel, {color: '#007036'}]}>
                                Contact Us
                            </Text>
                            {
                                nestedDrawerItem === true
                                    ? <AntDesign name="minus" size={24} color={categoryFocus ? '#007036' : '#007036'}/>
                                    : <AntDesign name="plus" size={24} color={categoryFocus ? '#007036' : '#007036'}/>
                            }
                        </View>
                    </View>
                )}
                onPress={() => {
                    setCategoryFocus(true);
                    nestedDrawerItemFUN()
                }}
                style={categoryFocus ? styles.drawerItemFocused : styles.drawerItem}
            />

            <View style={styles.drawerNestedItemContainer}>
                {nestedDrawerItem && (
                    <DrawerItem
                        label={() => (
                            <Text style={styles.drawerLabel}>
                                Message
                            </Text>
                        )}
                        onPress={() => props.navigation.navigate('MessageStack')}
                    />
                )}
                {nestedDrawerItem && (
                    <DrawerItem
                        label={() => (
                            <Text style={styles.drawerLabel}>
                                Contact Us
                            </Text>
                        )}
                        onPress={() => props.navigation.navigate('ContactStack')}
                    />
                )}
            </View>

            {/*/End Category*/}

            <DrawerItem
                label={() => (
                    <View>
                        <View style={{flexDirection: 'row'}}>
                            <Text
                                style={[nestedFocus ? styles.drawerLabelFocused : styles.drawerLabel, {color: '#007036'}]}>
                                Need Help
                            </Text>
                            {
                                nestedItemDrawerItem === true
                                    ? <AntDesign name="minus" size={24} color={nestedFocus ? '#007036' : '#007036'}/>
                                    : <AntDesign name="plus" size={24} color={nestedFocus ? '#007036' : '#007036'}/>
                            }
                        </View>
                    </View>
                )}
                onPress={() => {
                    setNestedFocus(true);
                    handleNestedItemDrawerItem()
                }}
                style={categoryFocus ? styles.drawerItemFocused : styles.drawerItem}
            />

            <View style={styles.drawerNestedItemContainer}>
                {nestedItemDrawerItem && (
                    <DrawerItem
                        label={() => (
                            <Text style={styles.drawerLabel}>
                                FAQ
                            </Text>
                        )}
                        onPress={() => props.navigation.navigate('FAQStack')}
                    />
                )}
                {nestedItemDrawerItem && (
                    <DrawerItem
                        label={() => (
                            <Text style={styles.drawerLabel}>
                                Call
                            </Text>
                        )}
                        onPress={() => props.navigation.navigate('CallStack')}
                    />
                )}
            </View>
            {/*/End Category*/}

            {/*About Us*/}
            <DrawerItem
                label={() => (
                    <Text style={styles.drawerLabel2}>
                        About Us
                    </Text>
                )}
                onPress={() => props.navigation.navigate('AboutStack')}
                style={styles.drawerItem2}
            />
        </DrawerContentScrollView>
    )
};

const DrawerNavigator = ({nav}) => {

    return (
        <Drawer.Navigator
            screenOptions={({navigation}) => ({
                headerStyle: {
                    backgroundColor: "#184772",
                    ...Platform.select({
                        ios: {
                            height: 50,
                        },
                        android: {
                            height: 50,
                        }
                    })
                },
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.headerLeft}>
                        <FontAwesome name="bars" size={25} color="#fff" style={{padding: 5}}/>
                    </TouchableOpacity>
                ),
                swipeEdgeWidth: 0,
                drawerStyle: {flex: 1, width: "70%", paddingRight: 10},
                headerShown: false
            })}
            drawerContent={(props) => <CustomDrawerContent {...props} nav={nav}/>}>

            <Drawer.Screen name={screens.HomeTab} component={BottomTabNavigator}/>
        </Drawer.Navigator>
    )
};

const styles = StyleSheet.create({
    // Troggle
    headerLeft: {
        marginLeft: 10,
    },

    headerImage: {
        ...Platform.select({
            ios: {
                width: 150,
                height: 20,
            },
            android: {
                width: 150,
                height: 20,
            }
        })
    },

    headerTitle: {
        fontWeight: "bold",
        marginLeft: 10,
        color: "#FFF"
    },

    headerRight: {
        marginRight: 15,
    },
    // drawer content
    drawerLabel: {
        fontSize: 14,
        width: "100%",
        fontWeight: '500',
    },
    drawerLabel2: {
        fontSize: 14,
        width: "100%",
        color: "#007036",
        fontWeight: '500',
    },
    drawerLabelFocused: {
        fontSize: 14,
        fontWeight: '500',
        width: "100%",
        color: "#000",

    },
    drawerItem: {
        height: 50,
        justifyCenter: "center",
        backgroundColor: "#E9EBEC",
        color: "#007036"

    },
    drawerItem2: {
        backgroundColor: "#E9EBEC",
        color: "#007036"
    },

    drawerItemFocused: {
        backgroundColor: "#E9EBEC",
        color: "#007036"
    },
    white: {
        color: 'white',
    },
    drawerNestedItemContainer: {
        marginLeft: 20
    },
    touchableButton: {
        borderRadius: 50,
        backgroundColor: "#FFF",
        overflow: "hidden",
    }
});

export default DrawerNavigator