import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import News from '../screens/News';
import NewInfo from '../screens/NewInfo';

const NewsNavigator = ( ) => {

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
      initialRouteName="News"
    >
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
    </Stack.Navigator>
  );
};

export default NewsNavigator;

