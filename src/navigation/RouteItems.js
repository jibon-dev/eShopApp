import * as React from 'react'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'


export const screens = {
    HomeTab: 'HomeTab',
    HomeStack: 'HomeStack',
    Home: 'Home',

    AboutStack: 'AboutStack',
    About: 'About',

    ContactStack: 'ContactStack',
    Contact: 'Contact',

    SearchStack: 'SearchStack',
    Search: 'Search',

    UserProfileStack: 'UserProfileStack',
    UserProfile: 'UserProfile',

};

export const routes = [

    // HomeStack ============================================================
    {
        name: screens.HomeTab,
        focusedRoute: screens.HomeTab,
        title: 'Home',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <FontAwesome name="home" size={30} color={focused ? '#551E18' : '#000'}/>,
    },
    {
        name: screens.HomeStack,
        focusedRoute: screens.HomeStack,
        title: 'Home',
        showInTab: true,
        showInDrawer: true,
        icon: (focused) =>
            <FontAwesome name="home" size={30} color={focused ? '#551E18' : '#000'}/>,
    },
    {
        name: screens.Home,
        focusedRoute: screens.HomeStack,
        title: 'Home',
        showInTab: true,
        showInDrawer: false,
        icon: (focused) =>
            <FontAwesome name="home" size={30} color={focused ? '#551E18' : '#000'}/>,
    },

    // AboutStack ==============================================================
    {
        name: screens.AboutStack,
        focusedRoute: screens.AboutStack,
        title: 'About',
        showInTab: true,
        showInDrawer: true,
        icon: (focused) =>
            <FontAwesome name="phone" size={30} color={focused ? '#551E18' : '#000'}/>,
    },
    {
        name: screens.About,
        focusedRoute: screens.AboutStack,
        title: 'About',
        showInTab: true,
        showInDrawer: true,
        icon: (focused) =>
            <FontAwesome name="phone" size={30} color={focused ? '#551E18' : '#000'}/>,
    },

    // ContactStack ============================================================

    {
        name: screens.ContactStack,
        focusedRoute: screens.ContactStack,
        title: 'Contact Us',
        showInTab: true,
        showInDrawer: true,
         icon: (focused) =>
            <FontAwesome name="envelope" size={30} color={focused ? '#551E18' : '#000'}/>,
    },
    {
        name: screens.Contact,
        focusedRoute: screens.ContactStack,
        title: 'Contact Us',
        showInTab: true,
        showInDrawer: true,
        icon: (focused) =>
          <FontAwesome name="envelope" size={30} color={focused ? '#551E18' : '#000'}/>,
    },

    // SearchStack ============================================================
    {
        name: screens.SearchStack,
        focusedRoute: screens.SearchStack,
        title: 'Search',
        showInTab: false,
        showInDrawer: true,
    },

    // UserProfileStack =======================================================
    {
        name: screens.UserProfileStack,
        focusedRoute: screens.UserProfileStack,
        title: 'UserProfile',
        showInTab: false,
        showInDrawer: true,
    },

];