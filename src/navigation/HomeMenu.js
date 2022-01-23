import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet, Platform } from 'react-native';

import AttractionsNavigator from './AttractionsNavigator';
import Home from '../screens/Home';
import CategoryNavigator from './CategoryNavigator';
import Information from '../screens/Information';
import NewsNavigator from './NewsNavigator';

import Feather from 'react-native-vector-icons/Feather';

import colors from '../utils/colors';

const Tab = createBottomTabNavigator();

const HomeMenu = () => {
  return (
    <NavigationContainer>
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
                name="AttractionsNavigator" 
                component={AttractionsNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="aperture" color={color} size={size} />
                    ),
                    tabBarLabel: 'Atractivos',
                    tabBarActiveTintColor: colors.GREEN,
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontFamily: 'Lato-Bold',
                    },
                    headerShown: false,
                }} 
            />
            <Tab.Screen 
                name="CategoryNavigator" 
                component={CategoryNavigator} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="layers" color={color} size={size} />
                    ),
                    tabBarLabel: 'Categorías',
                    tabBarActiveTintColor: colors.GREEN,
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontFamily: 'Lato-Regular',
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
                        fontFamily: 'Lato-Bold',
                    },
                    headerShown: false,
                }}
            />
            <Tab.Screen 
                name="NewsNavigator" 
                component={NewsNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="archive" color={color} size={size} />
                    ),
                    tabBarLabel: 'Noticias',
                    tabBarActiveTintColor: colors.GREEN,
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontFamily: 'Lato-Bold',
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
                    tabBarLabel: 'Información',
                    tabBarActiveTintColor: colors.GREEN,
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontFamily: 'Lato-Bold',
                    },
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    TabNavigation: {
        height: Platform.OS === 'ios' ? 80 : 60,
        marginTop: -80,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeMenu;
