import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Trekking from '../screens/Trekking';
import TrekkingInfo from '../screens/TrekkingInfo';

const TrekkingNavigator = ( ) => {

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
      initialRouteName="Trekking"
    >
      <Stack.Screen
        name="Trekking"
        component={Trekking}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="TrekkingInfo"
        component={TrekkingInfo}
        options={{
          headerShown: false,
          tabBarStyle:{ display: 'none' }
        }}
      />
    </Stack.Navigator>
  );
};

export default TrekkingNavigator;

