import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeTabMenu from './HomeTabMenu';
import HomeTabMenuEn from './HomeTabMenuEn';


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
import Search from '../screens/Search';


import AttractionsEn from '../screens/en/Attractions';
import AtractionInfoEn from '../screens/en/AtractionInfo';
import CategoriesEn from '../screens/en/Categories';
import CategoryListEn from '../screens/en/CategoryList';
import CommerceEn from '../screens/en/Commerce';
import InformationEn from '../screens/en/Information';
import NewsEn from '../screens/en/News';
import NewInfoEn from '../screens/en/NewInfo';
import InfoBanosEn from '../screens/en/InfoBanos';
import MapEn from '../screens/en/Map';
import ViewMapEn from '../screens/en/ViewMap';
import ViewMappEn from '../screens/en/ViewMapp';
import SearchEn from '../screens/en/Search';

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
                    },
                    gestureEnabled: false,
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
                    name="HomeTabMenuEn"
                    component={HomeTabMenuEn}
                    options={{
                        headerShown: false,
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
                <Stack.Screen
                    name="Search"
                    component={Search}
                    options={{
                    headerShown: false,
                    tabBarStyle:{ display: 'none' }
                    }}
                />


                <Stack.Screen
                    name="AttractionsEn"
                    component={AttractionsEn}
                    options={{
                    headerShown: false
                    }}
                />
                <Stack.Screen
                    name="AtractionInfoEn"
                    component={AtractionInfoEn}
                    options={{
                    headerShown: false,
                    tabBarStyle:{ display: 'none' }
                    }}
                />
                <Stack.Screen
                    name="CategoriesEn"
                    component={CategoriesEn}
                    options={{
                    headerShown: false
                    }}
                />
                <Stack.Screen
                    name="CategoryListEn"
                    component={CategoryListEn}
                    options={{
                    headerShown: false
                    }}
                />
                <Stack.Screen
                    name="CommerceEn"
                    component={CommerceEn}
                    options={{
                    headerShown: false
                    }}
                />
                <Stack.Screen
                    name="InformationEn"
                    component={InformationEn}
                    options={{
                    headerShown: false
                    }}
                />
                <Stack.Screen
                    name="NewsEn"
                    component={NewsEn}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="NewInfoEn"
                    component={NewInfoEn}
                    options={{
                    headerShown: false,
                    tabBarStyle:{ display: 'none' }
                    }}
                />
                <Stack.Screen
                    name="InfoBanosEn"
                    component={InfoBanosEn}
                    options={{
                    headerShown: false,
                    tabBarStyle:{ display: 'none' }
                    }}
                />
                <Stack.Screen
                    name="MapEn"
                    component={MapEn}
                    options={{
                    headerShown: false,
                    tabBarStyle:{ display: 'none' }
                    }}
                />
                <Stack.Screen
                    name="ViewMapEn"
                    component={ViewMapEn}
                    options={{
                    headerShown: false,
                    tabBarStyle:{ display: 'none' }
                    }}
                />
                <Stack.Screen
                    name="ViewMappEn"
                    component={ViewMappEn}
                    options={{
                    headerShown: false,
                    tabBarStyle:{ display: 'none' }
                    }}
                />
                <Stack.Screen
                    name="SearchEn"
                    component={SearchEn}
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





