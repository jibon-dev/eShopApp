import * as React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const screens = {
  HomeTab: 'HomeTab',
  HomeStack: 'HomeStack',
  Home: 'Home',

  AboutStack: 'AboutStack',
  About: 'About',

  BrandStack: 'BrandStack',
  Brand: 'Brand',

  GiveawayStack: 'GiveawayStack',
  Giveaway: 'Giveaway',

  CartStack: 'CartStack',
  Cart: 'Cart',

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
    icon: focused => (
      <FontAwesome name="home" size={30} color={focused ? '#551E18' : '#000'} />
    ),
  },
  {
    name: screens.HomeStack,
    focusedRoute: screens.HomeStack,
    title: 'Home',
    showInTab: true,
    showInDrawer: true,
    icon: focused => (
      <FontAwesome name="home" size={30} color={focused ? '#551E18' : '#000'} />
    ),
  },
  {
    name: screens.Home,
    focusedRoute: screens.HomeStack,
    title: 'Home',
    showInTab: true,
    showInDrawer: false,
    icon: focused => (
      <FontAwesome name="home" size={30} color={focused ? '#551E18' : '#000'} />
    ),
  },

  // Brand ====================================
  {
    name: screens.BrandStack,
    focusedRoute: screens.BrandStack,
    title: 'Brands',
    showInTab: true,
    showInDrawer: false,
    icon: focused => (
      <Ionicons
        name="grid-sharp"
        size={focused ? 20 : 20}
        color={focused ? 'black' : '#969696'}
      />
    ),
  },
  {
    name: screens.Brand,
    focusedRoute: screens.BrandStack,
    title: 'Brands',
    showInTab: false,
    showInDrawer: false,

    icon: focused => (
      <Ionicons
        name="grid-sharp"
        size={focused ? 20 : 20}
        color={focused ? 'black' : '#969696'}
      />
    ),
  },

  // 5. Giveaway ==================================
  {
    name: screens.GiveawayStack,
    focusedRoute: screens.GiveawayStack,
    title: 'Giveaway',
    showInTab: true,
    showInDrawer: false,
    icon: focused => (
      <AntDesign
        name="gift"
        size={focused ? 20 : 20}
        color={focused ? 'black' : '#969696'}
      />
    ),
  },
  {
    name: screens.Giveaway,
    focusedRoute: screens.GiveawayStack,
    title: 'Giveaway',
    showInTab: true,
    showInDrawer: false,
    icon: focused => (
      <AntDesign
        name="gift"
        size={focused ? 20 : 20}
        color={focused ? 'black' : '#969696'}
      />
    ),
  },

  // 11. Cart ============================
  {
    name: screens.CartStack,
    focusedRoute: screens.CartStack,
    title: 'Cart',
    showInTab: true,
    showInDrawer: false,
    icon: focused => (
      <FontAwesome
        name="shopping-cart"
        size={focused ? 20 : 20}
        color={focused ? 'black' : '#969696'}
      />
    ),
  },
  // Tab
  {
    name: screens.Cart,
    focusedRoute: screens.CartStack,
    title: 'Cart',
    showInTab: false,
    showInDrawer: false,
    icon: focused => (
      <FontAwesome
        name="shopping-cart"
        size={focused ? 20 : 20}
        color={focused ? 'black' : '#969696'}
      />
    ),
  },

  // AboutStack ==============================================================
  {
    name: screens.AboutStack,
    focusedRoute: screens.AboutStack,
    title: 'About',
    showInTab: false,
    showInDrawer: false,
    icon: focused => (
      <FontAwesome
        name="phone"
        size={30}
        color={focused ? '#551E18' : '#000'}
      />
    ),
  },
  {
    name: screens.About,
    focusedRoute: screens.AboutStack,
    title: 'About',
    showInTab: false,
    showInDrawer: false,
    icon: focused => (
      <FontAwesome
        name="phone"
        size={30}
        color={focused ? '#551E18' : '#000'}
      />
    ),
  },

  // ContactStack ============================================================

  {
    name: screens.ContactStack,
    focusedRoute: screens.ContactStack,
    title: 'Contact Us',
    showInTab: false,
    showInDrawer: false,
    icon: focused => (
      <FontAwesome
        name="envelope"
        size={30}
        color={focused ? '#551E18' : '#000'}
      />
    ),
  },
  {
    name: screens.Contact,
    focusedRoute: screens.ContactStack,
    title: 'Contact Us',
    showInTab: false,
    showInDrawer: false,
    icon: focused => (
      <FontAwesome
        name="envelope"
        size={30}
        color={focused ? '#551E18' : '#000'}
      />
    ),
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
