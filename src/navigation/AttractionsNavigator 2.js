import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Attractions from '../screens/Attractions';
import AtractionInfo from '../screens/AtractionInfo';

const AttractionsNavigator = ( ) => {

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
      initialRouteName="Atractions"
    >
      <Stack.Screen
        name="Attractions"
        component={Attractions}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="AtractionInfo"
        component={AtractionInfo}
        options={{
          headerShown: false,
          tabBarStyle:{ display: 'none' }
        }}
      />
    </Stack.Navigator>
  );
};

export default AttractionsNavigator;

