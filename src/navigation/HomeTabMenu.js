import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Attractions from '../screens/Attractions';
import Explore from '../screens/Explore';
import Categories from '../screens/Categories';
import Information from '../screens/Information';

import Feather from 'react-native-vector-icons/Feather';

import colors from '../utils/colors';

const Tab = createBottomTabNavigator();

const HomeTabMenu = () => {
  return (
    <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarStyle: { 
                position: 'absolute',
                borderRadius: 20,
                paddingHorizontal: 10,
                shadowColor: colors.BLACK,
                shadowOffset: {
                    width: 0,
                    height: 7,
                },
                shadowOpacity: 0.41,
                shadowRadius: 9.11,
                elevation: 8,
            },
        }}
    >
        <Tab.Screen 
            name="Explore" 
            component={Explore}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Feather name="navigation" color={color} size={size} />
                ),
                tabBarLabel: 'Mapa',
                tabBarActiveTintColor: colors.GREEN,
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontFamily: 'Poppins-Regular',
                },
                headerShown: false,
            }} 
        />
        <Tab.Screen
            name="Attractions" 
            component={Attractions}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Feather name="aperture" color={color} size={size} />
                ),
                tabBarLabel: 'Atractivos',
                tabBarActiveTintColor: colors.GREEN,
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontFamily: 'Poppins-Regular',
                },
                headerShown: false,
            }} 
        />
        <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Feather name="home" color={color} size={size} />
                ),
                tabBarLabel: 'Home',
                tabBarActiveTintColor: colors.GREEN,
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontFamily: 'Poppins-Regular',
                },
                headerShown: false,
            }}
        />
        <Tab.Screen 
            name="Categories" 
            component={Categories} 
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Feather name="layers" color={color} size={size} />
                ),
                tabBarLabel: 'Categorías',
                tabBarActiveTintColor: colors.GREEN,
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontFamily: 'Poppins-Regular',
                },
                headerShown: false,
            }}
        />
        <Tab.Screen 
            name="Information" 
            component={Information} 
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Feather name="info" color={color} size={size} />
                ),
                tabBarLabel: 'iTour',
                tabBarActiveTintColor: colors.GREEN,
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontFamily: 'Poppins-Regular',
                },
                headerShown: false,
            }}
        />
    </Tab.Navigator>
  );
}

export default HomeTabMenu;
