import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Categories from '../screens/Categories';
import CategoryList from '../screens/CategoryList';
import Commerce from '../screens/Commerce';

const CategoryNavigator = ( ) => {

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
      initialRouteName="Categories"
    >
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="CategoryList"
        component={CategoryList}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Commerce"
        component={Commerce}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default CategoryNavigator;

