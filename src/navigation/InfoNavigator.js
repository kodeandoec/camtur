import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Information from '../screens/Information';
import News from '../screens/News';
import NewInfo from '../screens/NewInfo';
import InfoBanos from '../screens/InfoBanos';
import Map from '../screens/Map';
import ViewMap from '../screens/ViewMap';

const InfoNavigator = ( ) => {

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle:{
          backgroundColor: 'white'
        },
        headerStyle:{
          elevation: 0,
          shadowColor: 'transparent',
        }
      }}
      initialRouteName="Information"
    >
      <Stack.Screen
        name="Information"
        component={Information}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="News"
        component={News}
        options={{
            headerShown: false
        }}
      />
      <Stack.Screen
        name="NewInfo"
        component={NewInfo}
        options={{
          headerShown: false,
          tabBarStyle:{ display: 'none' }
        }}
      />
      <Stack.Screen
        name="InfoBanos"
        component={InfoBanos}
        options={{
          headerShown: false,
          tabBarStyle:{ display: 'none' }
        }}
      />
      <Stack.Screen
        name="Map"
        component={Map}
        options={{
          headerShown: false,
          tabBarStyle:{ display: 'none' }
        }}
      />
      <Stack.Screen
        name="ViewMap"
        component={ViewMap}
        options={{
          headerShown: false,
          tabBarStyle:{ display: 'none' }
        }}
      />
    </Stack.Navigator>
  );
};

export default InfoNavigator;

