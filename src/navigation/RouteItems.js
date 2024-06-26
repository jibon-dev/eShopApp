import * as React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const screens = {
  HomeTab: 'HomeTab',
  HomeStack: 'HomeStack',
  Home: 'Home',

  LoginStack: 'LoginStack',
  Login: 'Login',

  SignupStack: 'SignupStack',
  Signup: 'Signup',

  LogoutStack: 'LogoutStack',
  Logout: 'Logout',

  BrandStack: 'BrandStack',
  Brand: 'Brand',

  GiveawayStack: 'GiveawayStack',
  Giveaway: 'Giveaway',

  CallStack: 'CallStack',
  Call: 'Call',

  CartStack: 'CartStack',
  Cart: 'Cart',

  CheckoutStack: 'CheckoutStack',
  Checkout: 'Checkout',

  InvoiceStack: 'InvoiceStack',
  Invoice: 'Invoice',

  OrderConfirmationStack: 'OrderConfirmationStack',
  OrderConfirmation: 'OrderConfirmation',

  SearchProductStack: 'SearchProductStack',
  SearchProduct: 'SearchProduct',

  ProductListStack: 'ProductListStack',
  ProductList: 'ProductList',

  ProductDetailStack: 'ProductDetailStack',
  ProductDetail: 'ProductDetail',

  /*------------------------------------
        User Profile
  -------------------------------------*/
  UserProfileStack: 'UserProfileStack',
  UserProfile: 'UserProfile',

  PersonalInformationStack: 'PersonalInformationStack',
  PersonalInformation: 'PersonalInformation',

  TrackingMyParcelStack: 'TrackingMyParcelStack',
  TrackingMyParcel: 'TrackingMyParcel',

  PurchaseHistoryStack: 'PurchaseHistoryStack',
  PurchaseHistory: 'PurchaseHistory',

  ReturnPolicyStack: 'ReturnPolicyStack',
  ReturnPolicy: 'ReturnPolicy',

  SecurityPrivacyStack: 'SecurityPrivacyStack',
  SecurityPrivacy: 'SecurityPrivacy',

  TermsAndConditionStack: 'TermsAndConditionStack',
  TermsAndCondition: 'TermsAndCondition',

  AboutStack: 'AboutStack',
  About: 'About',

  ContactStack: 'ContactStack',
  Contact: 'Contact',

  SettingStack: 'SettingStack',
  Setting: 'Setting',
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
      <FontAwesome name="home" size={30} color={focused ? 'black' : '#969696'} />
    ),
  },
  {
    name: screens.HomeStack,
    focusedRoute: screens.HomeStack,
    title: 'Home',
    showInTab: true,
    showInDrawer: true,
    icon: focused => (
      <FontAwesome name="home" size={30} color={focused ? 'black' : '#969696'} />
    ),
  },
  {
    name: screens.Home,
    focusedRoute: screens.HomeStack,
    title: 'Home',
    showInTab: true,
    showInDrawer: false,
    icon: focused => (
      <FontAwesome name="home" size={30} color={focused ? 'black' : '#969696'} />
    ),
  },

  // 3. Login ====================================
  {
    name: screens.LoginStack,
    focusedRoute: screens.LoginStack,
    title: 'Login',
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
  {
    name: screens.Login,
    focusedRoute: screens.LoginStack,
    title: 'Login',
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

  // 4. Signup ====================================
  {
    name: screens.SignupStack,
    focusedRoute: screens.SignupStack,
    title: 'Signup',
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
  {
    name: screens.Signup,
    focusedRoute: screens.SignupStack,
    title: 'Signup',
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

  // 4. Logout ====================================
  {
    name: screens.LogoutStack,
    focusedRoute: screens.LogoutStack,
    title: 'Logout',
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
  {
    name: screens.Logout,
    focusedRoute: screens.LogoutStack,
    title: 'Logout',
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

  // 8. ProductList Category =============================
  {
    name: screens.ProductListStack,
    focusedRoute: screens.ProductListStack,
    title: 'ProductList',
    showInTab: false,
    showInDrawer: false,
  },
  {
    name: screens.ProductList,
    focusedRoute: screens.ProductListStack,
    title: 'ProductList',
    showInTab: false,
    showInDrawer: false,
  },

  {
    name: screens.ProductDetailStack,
    focusedRoute: screens.ProductDetailStack,
    title: 'Product Detail',
    showInTab: false,
    showInDrawer: false,
  },
  {
    name: screens.ProductDetail,
    focusedRoute: screens.ProductDetailStack,
    title: 'Product Detail',
    showInTab: false,
    showInDrawer: false,
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

  // 6. Call ===================================
  {
    name: screens.CallStack,
    focusedRoute: screens.CallStack,
    title: 'Call Us',
    showInTab: true,
    showInDrawer: true,
    icon: focused => (
      <FontAwesome
        name="phone"
        size={focused ? 20 : 20}
        color={focused ? 'black' : '#969696'}
      />
    ),
  },
  {
    name: screens.Call,
    focusedRoute: screens.CallStack,
    title: 'Call Us',
    showInTab: true,
    showInDrawer: true,
    icon: focused => (
      <FontAwesome
        name="phone"
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

  // 12. Checkout Process ====================
  {
    name: screens.CheckoutStack,
    focusedRoute: screens.CheckoutStack,
    title: 'Checkout',
    showInTab: false,
    showInDrawer: false,
  },
  {
    name: screens.Checkout,
    focusedRoute: screens.CheckoutStack,
    title: 'Checkout',
    showInTab: false,
    showInDrawer: false,
  },

  // 13. Order ConfirmationStack ======================
  {
    name: screens.OrderConfirmationStack,
    focusedRoute: screens.OrderConfirmationStack,
    title: 'Order Confirmation',
    showInTab: false,
    showInDrawer: false,
  },
  {
    name: screens.OrderConfirmation,
    focusedRoute: screens.OrderConfirmationStack,
    title: 'Order Confirmation',
    showInTab: false,
    showInDrawer: false,
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
        color={focused ? 'black' : '#969696'}
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
        color={focused ? 'black' : '#969696'}
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
        color={focused ? 'black' : '#969696'}
      />
    ),
  },

  // 9. SearchProduct Category ===================
  {
    name: screens.SearchProductStack,
    focusedRoute: screens.SearchProductStack,
    title: 'SearchProduct',
    showInTab: false,
    showInDrawer: true,
  },
  {
    name: screens.SearchProduct,
    focusedRoute: screens.SearchProductStack,
    title: 'SearchProduct',
    showInTab: false,
    showInDrawer: false,
  },

  // UserProfileStack =======================================================
  {
    name: screens.UserProfileStack,
    focusedRoute: screens.UserProfileStack,
    title: 'UserProfile',
    showInTab: false,
    showInDrawer: true,
  },

  // 17. Tracking My Parcel =========================
  {
    name: screens.TrackingMyParcelStack,
    focusedRoute: screens.TrackingMyParcelStack,
    title: 'Tracking My Parcel',
    showInTab: false,
    showInDrawer: false,
  },
  // Tab
  {
    name: screens.TrackingMyParcel,
    focusedRoute: screens.TrackingMyParcelStack,
    title: 'Tracking My Parcel',
    showInTab: false,
    showInDrawer: false,
  },

  // 18. PurchaseHistoryStack ======================
  {
    name: screens.PurchaseHistoryStack,
    focusedRoute: screens.PurchaseHistoryStack,
    title: 'Purchase History',
    showInTab: false,
    showInDrawer: false,
  },
  {
    name: screens.PurchaseHistory,
    focusedRoute: screens.PurchaseHistoryStack,
    title: 'Purchase History',
    showInTab: false,
    showInDrawer: false,
  },

  // 19. ReturnPolicy ============================
  {
    name: screens.ReturnPolicyStack,
    focusedRoute: screens.ReturnPolicyStack,
    title: 'Return Policy',
    showInTab: false,
    showInDrawer: false,
  },
  // Tab
  {
    name: screens.ReturnPolicy,
    focusedRoute: screens.ReturnPolicyStack,
    title: 'Return Policy',
    showInTab: false,
    showInDrawer: false,
  },

  // 20. SecurityPrivacy ===========================
  {
    name: screens.SecurityPrivacyStack,
    focusedRoute: screens.SecurityPrivacyStack,
    title: 'Security Privacy',
    showInTab: false,
    showInDrawer: false,
  },
  // Tab
  {
    name: screens.SecurityPrivacy,
    focusedRoute: screens.SecurityPrivacyStack,
    title: 'Security Privacy',
    showInTab: false,
    showInDrawer: false,
  },

  // 21. Terms & Condition ===========================
  {
    name: screens.TermsAndConditionStack,
    focusedRoute: screens.TermsAndConditionStack,
    title: 'TermsAndCondition',
    showInTab: false,
    showInDrawer: false,
  },
  // Tab
  {
    name: screens.TermsAndCondition,
    focusedRoute: screens.TermsAndConditionStack,
    title: 'TermsAndCondition',
    showInTab: false,
    showInDrawer: false,
  },

  // 24. Setting ============================
  {
    name: screens.SettingStack,
    focusedRoute: screens.SettingStack,
    title: 'Setting ',
    showInTab: false,
    showInDrawer: false,
    icon: focused => (
      <AntDesign
        name="setting"
        size={focused ? 20 : 20}
        color={focused ? 'black' : '#969696'}
      />
    ),
  },
  {
    name: screens.Setting,
    focusedRoute: screens.SettingStack,
    title: 'Setting',
    showInTab: false,
    showInDrawer: false,
    icon: focused => (
      <AntDesign
        name="setting"
        size={focused ? 20 : 20}
        color={focused ? 'black' : '#969696'}
      />
    ),
  },

  // 14. InvoiceStack =======================
  {
    name: screens.InvoiceStack,
    focusedRoute: screens.InvoiceStack,
    title: 'Invoice',
    showInTab: false,
    showInDrawer: true,
  },
  {
    name: screens.Invoice,
    focusedRoute: screens.InvoiceStack,
    title: 'Invoice',
    showInTab: false,
    showInDrawer: false,
  },
];
