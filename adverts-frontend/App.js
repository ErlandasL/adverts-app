/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStackScreen from './screens/MainTabScreen';
import DetailsStackScreen from './screens/MainTabScreen';
import ExploreStackScreen from './screens/MainTabScreen';
import ProfileStackScreen from './screens/MainTabScreen';

import {DrawerContent} from './screens/DrawerContent';
import MainTabScreen from './screens/MainTabScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        {/* <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
        <Drawer.Screen name="Explore" component={ExploreStackScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
