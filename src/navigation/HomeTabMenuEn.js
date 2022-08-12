import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeEn from '../screens/en/HomeEn';
import Attractions from '../screens/en/Attractions';
import ExploreEn from '../screens/en/ExploreEn';
import Categories from '../screens/en/Categories';
import Information from '../screens/en/Information';

import Feather from 'react-native-vector-icons/Feather';

import colors from '../utils/colors';

const Tab = createBottomTabNavigator();

const HomeTabMenuEn = () => {
  return (
    <Tab.Navigator
        initialRouteName="HomeEn"
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
            name="HomeEn" 
            component={HomeEn} 
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
            name="ExploreEn" 
            component={ExploreEn}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Feather name="navigation" color={color} size={size} />
                ),
                tabBarLabel: 'Map',
                tabBarActiveTintColor: colors.GREEN,
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontFamily: 'Poppins-Regular',
                },
                headerShown: false,
            }} 
        />
        <Tab.Screen
            name="AttractionsEn" 
            component={Attractions}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Feather name="aperture" color={color} size={size} />
                ),
                tabBarLabel: 'Attractions',
                tabBarActiveTintColor: colors.GREEN,
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontFamily: 'Poppins-Regular',
                },
                headerShown: false,
            }} 
        />
        {/* <Tab.Screen 
            name="CategoriesEn" 
            component={Categories} 
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Feather name="layers" color={color} size={size} />
                ),
                tabBarLabel: 'Category',
                tabBarActiveTintColor: colors.GREEN,
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontFamily: 'Poppins-Regular',
                },
                headerShown: false,
            }}
        /> */}
        <Tab.Screen 
            name="InformationEn" 
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

export default HomeTabMenuEn;
