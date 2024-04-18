import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, StyleSheet, View} from 'react-native';
import {routes, screens} from './RouteItems';

/*==================================================================
                    Added stack-navigators
===================================================================*/
import HomeStackNavigator from './stack-navigators/HomeStackNavigator';
import BrandStackNavigator from './stack-navigators/BrandStackNavigator';
import GiveawayStackNavigator from './stack-navigators/GiveawayStackNavigator';
import CallStackNavigator from './stack-navigators/CallStackNavigator';
import CartStackNavigator from './stack-navigators/CartStackNavigator';
import AboutStackNavigator from './stack-navigators/AboutStackNavigator';
import ContactStackNavigator from './stack-navigators/ContactStackNavigator';
import SearchStackNavigator from './stack-navigators/SearchStackNavigator';
import UserProfileStackNavigator from './stack-navigators/UserProfileStackNavigator';
import TrackingMyParcelStackNavigator from './stack-navigators/TrackingMyParcelStackNavigator';

const Tab = createBottomTabNavigator();

const tabOptions = ({route}) => {
  const item = routes.find(routeItem => routeItem.name === route.name); // get the route config object

  if (!item.showInTab) {
    // hide this tab
    return {
      tabBarButton: () => <View style={{width: 0}} />,
      headerShown: false,
      tabBarStyle: styles.tabContainer,
      title: item.title,
    };
  }

  return {
    tabBarIcon: ({focused}) => item.icon(focused),
    tabBarLabel: () => (
      <Text style={styles.tabBarLabel}>{item.title || ''}</Text>
    ),
    headerShown: false,
    tabBarStyle: styles.tabContainer,
    title: item.title,
  };
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen name={screens.HomeStack} component={HomeStackNavigator} />
      <Tab.Screen name={screens.BrandStack} component={BrandStackNavigator} />
      <Tab.Screen
        name={screens.GiveawayStack}
        component={GiveawayStackNavigator}
      />
      <Tab.Screen name={screens.CallStack} component={CallStackNavigator} />
      <Tab.Screen name={screens.CartStack} component={CartStackNavigator} />

      <Tab.Screen name={screens.AboutStack} component={AboutStackNavigator} />
      <Tab.Screen
        name={screens.ContactStack}
        component={ContactStackNavigator}
      />
      <Tab.Screen name={screens.SearchStack} component={SearchStackNavigator} />
      <Tab.Screen
        name={screens.UserProfileStack}
        component={UserProfileStackNavigator}
      />
      <Tab.Screen
        name={screens.TrackingMyParcelStack}
        component={TrackingMyParcelStackNavigator}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    color: '#292929',
    fontSize: 12,
  },
  tabContainer: {
    height: 60,
  },
});

export default BottomTabNavigator;