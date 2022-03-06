import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeTabMenuEn from './HomeTabMenuEn';


import Attractions from '../screens/en/Attractions';
import AtractionInfo from '../screens/en/AtractionInfo';
import Categories from '../screens/en/Categories';
import CategoryList from '../screens/en/CategoryList';
import Commerce from '../screens/en/Commerce';
import Information from '../screens/en/Information';
import News from '../screens/en/News';
import NewInfo from '../screens/en/NewInfo';
import InfoBanos from '../screens/en/InfoBanos';
import Map from '../screens/en/Map';
import ViewMap from '../screens/en/ViewMap';
import ViewMapp from '../screens/en/ViewMapp';
import Search from '../screens/en/Search';

import {createStackNavigator} from '@react-navigation/stack';

const HomeMenuEn = () => {

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
                initialRouteName="HomeTabMenuEn"
            >
                <Stack.Screen
                    name="HomeTabMenuEn"
                    component={HomeTabMenuEn}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="AttractionsEn"
                    component={Attractions}
                    options={{
                    headerShown: false
                    }}
                />
                <Stack.Screen
                    name="AtractionInfoEn"
                    component={AtractionInfo}
                    options={{
                    headerShown: false,
                    tabBarStyle:{ display: 'none' }
                    }}
                />
                <Stack.Screen
                    name="CategoriesEn"
                    component={Categories}
                    options={{
                    headerShown: false
                    }}
                />
                <Stack.Screen
                    name="CategoryListEn"
                    component={CategoryList}
                    options={{
                    headerShown: false
                    }}
                />
                <Stack.Screen
                    name="CommerceEn"
                    component={Commerce}
                    options={{
                    headerShown: false
                    }}
                />
                <Stack.Screen
                    name="InformationEn"
                    component={Information}
                    options={{
                    headerShown: false
                    }}
                />
                <Stack.Screen
                    name="NewsEn"
                    component={News}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="NewInfoEn"
                    component={NewInfo}
                    options={{
                    headerShown: false,
                    tabBarStyle:{ display: 'none' }
                    }}
                />
                <Stack.Screen
                    name="InfoBanosEn"
                    component={InfoBanos}
                    options={{
                    headerShown: false,
                    tabBarStyle:{ display: 'none' }
                    }}
                />
                <Stack.Screen
                    name="MapEn"
                    component={Map}
                    options={{
                    headerShown: false,
                    tabBarStyle:{ display: 'none' }
                    }}
                />
                <Stack.Screen
                    name="ViewMapEn"
                    component={ViewMap}
                    options={{
                    headerShown: false,
                    tabBarStyle:{ display: 'none' }
                    }}
                />
                <Stack.Screen
                    name="ViewMappEn"
                    component={ViewMapp}
                    options={{
                    headerShown: false,
                    tabBarStyle:{ display: 'none' }
                    }}
                />
                <Stack.Screen
                    name="SearchEn"
                    component={Search}
                    options={{
                    headerShown: false,
                    tabBarStyle:{ display: 'none' }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default HomeMenuEn;





