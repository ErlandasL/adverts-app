import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from '../screens/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ExploreScreen from '../screens/ExploreScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: 'red',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarColor: '#009387',
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarColor: '#145AF9',
          tabBarLabel: 'Details',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" color={color} size={25} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="My Adverts"
        component={ProfileStackScreen}
        options={{
          tabBarColor: '#C14930',
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{
          tabBarColor: '#863ACC',
          tabBarLabel: 'Explore',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="folder" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#009387"
              onPress={() => {
                navigation.openDrawer();
              }}></Icon.Button>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

const DetailsStackScreen = ({navigation}) => {
  return (
    <DetailsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#145AF9',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <DetailsStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#145AF9"
              onPress={() => {
                navigation.openDrawer();
              }}></Icon.Button>
          ),
        }}
      />
    </DetailsStack.Navigator>
  );
};

const ExploreStackScreen = ({navigation}) => {
  return (
    <ExploreStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#863ACC',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <ExploreStack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#863ACC"
              onPress={() => {
                navigation.openDrawer();
              }}></Icon.Button>
          ),
        }}
      />
    </ExploreStack.Navigator>
  );
};

const ProfileStackScreen = ({navigation}) => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#C14930',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <ProfileStack.Screen
        name="My Adverts"
        component={ProfileScreen}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#C14930"
              onPress={() => {
                navigation.openDrawer();
              }}></Icon.Button>
          ),
        }}
      />
    </ProfileStack.Navigator>
  );
};
