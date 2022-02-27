import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeTabMenu from './HomeTabMenu';


import Attractions from '../screens/Attractions';
import AtractionInfo from '../screens/AtractionInfo';
import Categories from '../screens/Categories';
import CategoryList from '../screens/CategoryList';
import Commerce from '../screens/Commerce';
import Information from '../screens/Information';
import News from '../screens/News';
import NewInfo from '../screens/NewInfo';
import InfoBanos from '../screens/InfoBanos';
import Map from '../screens/Map';
import ViewMap from '../screens/ViewMap';
import ViewMapp from '../screens/ViewMapp';

import {createStackNavigator} from '@react-navigation/stack';

const HomeMenu = () => {

    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
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
                initialRouteName="HomeTabMenu"
            >
                <Stack.Screen
                    name="HomeTabMenu"
                    component={HomeTabMenu}
                    options={{
                        headerShown: false
                    }}
                />
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
                <Stack.Screen
                    name="ViewMapp"
                    component={ViewMapp}
                    options={{
                    headerShown: false,
                    tabBarStyle:{ display: 'none' }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default HomeMenu;





