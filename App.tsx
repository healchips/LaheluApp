import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreen';
import FreshScreen from './src/screens/FreshScreen';
import TrendingScreen from './src/screens/TrendingScreen';

import Header from './src/components/Header';  
import AboutScreen from './src/screens/AboutScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: '#222' },
        tabBarLabelStyle: { color: '#fff', fontSize: 16 },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Fresh':
              iconName = focused ? 'refresh' : 'refresh-outline';
              break;
            case 'Trending':
              iconName = focused ? 'flame' : 'flame-outline';
              break;
            default:
              iconName = 'home-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ header: () => <Header navigation={navigation} /> }} 
      />
      <Tab.Screen 
        name="Fresh" 
        component={FreshScreen} 
        options={{ header: () => <Header navigation={navigation} /> }} 
      />
      <Tab.Screen 
        name="Trending" 
        component={TrendingScreen} 
        options={{ header: () => <Header navigation={navigation} /> }} 
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown:false,
          drawerStyle: { backgroundColor: '#333' },
          drawerLabelStyle: { color: '#fff' },
        }}
      >
        <Drawer.Screen 
          name="HomeTabs" 
          component={TabNavigator} 
          options={{
            drawerLabel: 'Home',
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="About" 
          component={AboutScreen} 
          options={{
            drawerLabel: 'About Us',
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
