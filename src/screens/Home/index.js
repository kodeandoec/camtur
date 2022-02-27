import React, { useEffect, useState } from 'react'
import { 
    View, 
    Text,
    Image,
    ActivityIndicator,
    Pressable,
    FlatList,
    Linking
 } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import colors from '../../utils/colors'

import Ionicons from 'react-native-vector-icons/Ionicons'

import useCategories from '../../hooks/useCategories';
import useGetCommercesRand from '../../hooks/useGetCommercesRand';
import useGetAttractionsRand from '../../hooks/useGetAttractionsRand';

import styles from './index.styles'
 
const Home = ( { navigation }) => {

    const { top } = useSafeAreaInsets();

    const [ weather, setWeather ] = useState({
        "lat": -1.3959,
        "lon": -78.4271,
        "timezone": "America/Guayaquil",
        "timezone_offset": -18000,
        "current": {
          "dt": 1645979328,
          "sunrise": 1645960946,
          "sunset": 1646004646,
          "temp": 17.27,
          "feels_like": 17.35,
          "pressure": 1019,
          "humidity": 88,
          "dew_point": 15.27,
          "uvi": 9.19,
          "clouds": 100,
          "visibility": 10000,
          "wind_speed": 1.45,
          "wind_deg": 85,
          "wind_gust": 1.66,
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "lluvia ligera",
              "icon": "10d"
            }
          ],
          "rain": {
            "1h": 0.34
          }
        }
      })

    const getWeather = async () => {
        const URL = "https://api.openweathermap.org/data/2.5/onecall?lat=-1.395919&lon=-78.427127&appid=d3bfbd56ce8bfaa649aafb86482a6891&units=metric&lang=es&exclude=daily,hourly,minutely";
        
        await fetch(URL)
            .then(res => res.json())
            .then((data) => {
                setWeather(data)
            }
        );
    }

    useEffect(() => {
        getWeather()
    }, [])

    const { state, loading } = useCategories();
    const { state: commerces } = useGetCommercesRand();
    const { state: attractions } = useGetAttractionsRand();
    
    const Header = ( { navigation }) => {
        return (
            <>
                <View style={[styles.headerView, { paddingHorizontal: '5%'}]}>
                    <View style={styles.rowView}>
                        <View style={styles.backgroundIcon}>
                            <Image 
                                source={{ uri : `https://openweathermap.org/img/w/${weather.current.weather[0].icon}.png`}}
                                style={styles.iconWeater}
                            />
                        </View>
                        <View>
                            <Text style={styles.txtWeaterUp}>{weather.current.temp}°</Text>
                            <Text style={styles.txtWeaterDown}>{weather.current.weather[0].description}</Text>
                        </View>
                    </View>
                    {/* <Pressable
                        onPress={() => console.log('englisg')}
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? colors.NEW2 : colors.WHITE,
                                opacity: pressed ? 0.9 : 1,
                                transform: [ { scale: pressed ? 0.95 : 1, } ],
                            },
                            styles.languageView,
                        ]}
                    >
                        <Image
                            style={styles.language}
                            source={require('../../../assets/img/en.png')}
                            resizeMode="contain"
                        />
                    </Pressable> */}
                    <Image
                        style={styles.headerImage}
                        source={require('../../../assets/img/logo-visit-banos-2.png')}
                        resizeMode="contain"
                    />
                </View>
                <View style={{ paddingHorizontal: '5%' }}>
                    <Text style={styles.txtWelcomeUp}>Bienvenido a</Text>
                    <Text style={styles.txtWelcomeDown}>Baños Ecuador..!</Text>
                </View>
            </>
        )   
    }

    return (
        <>
        { loading ? (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color={colors.GREEN} />
            </View>
         ) 
        : (
            <ScrollView 
                style={[styles.container, { paddingTop: top }]}
                showsVerticalScrollIndicator={false}
            >
                <Header />

                <View style={styles.searchView}>
                    <View style={styles.searchIcon}>
                        <Ionicons name="ios-search" size={24} color={colors.NEW1} />
                    </View>
                    <Text style={styles.searchInput}>Qué estás buscando..?</Text>
                    <View style={styles.searchIcon}>
                        <Ionicons name="options-sharp" size={24} color={colors.NEW1} />
                    </View>
                </View>

                <Text style={styles.titleCaption}>Categorías</Text>

                <FlatList
                    data={state}
                    horizontal
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingLeft: '5%', paddingRight: '5%' }}
                    renderItem={({ item }) => (
                        <Pressable 
                            onPress={() => navigation.navigate(
                                'CategoryList', 
                                { 
                                    id: item.id, 
                                    name: item.category_es 
                                },
                            )}
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? colors.NEW2 : colors.WHITE,
                                    opacity: pressed ? 0.9 : 1,
                                    transform: [ { scale: pressed ? 0.95 : 1, } ],
                                    marginTop: 10,
                                    marginBottom: 20,
                                    marginRight: 10,
                                    borderRadius: 15,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 10,
                                        height: 3,
                                    },
                                    shadowOpacity: 0.41,
                                    shadowRadius: 9.11,
                                    elevation: 8,
                                },
                            ]}
                        >
                            <View style={styles.viewAttraction}>
                                <Image
                                    source={{ uri: item.photoUrl }}
                                    style={styles.imageCat}
                                    resizeMode='cover'
                                    resizeMethod='resize'
                                />
                                <View style={styles.ctnInfo}>
                                    <Text style={styles.txtName}>{item.category_es}</Text>
                                </View>
                            </View>
                        </Pressable>
                    )}
                />

                <Text style={[styles.titleCaption, { marginTop: 10 }]}>Recomendados</Text>

                <FlatList
                    data={commerces}
                    horizontal
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingLeft: '5%', paddingRight: '5%' }}
                    renderItem={({ item }) => (
                        <Pressable 
                            onPress={() => navigation.navigate(
                                'Commerce', { item },
                            )}
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? colors.NEW2 : colors.WHITE,
                                    opacity: pressed ? 0.9 : 1,
                                    transform: [ { scale: pressed ? 0.95 : 1, } ],
                                },
                                styles.viewCommerce
                            ]}
                        >
                            <View>
                                <Image
                                    source={{ uri: item.photo1 }}
                                    style={styles.imageCommerce}
                                    resizeMode='cover'
                                    resizeMethod='resize'
                                />
                                <View style={styles.ctnInfoCommerce}>
                                    <Text style={styles.txtNameCommerce} numberOfLines={1}>{item.name}</Text>
                                    <Text style={styles.txtAddresCommerce} numberOfLines={1}>{item.address}</Text>
                                    { item.phone ? ( <Text style={styles.txtAddresCommerce}>{item.phone}</Text> ) : null }
                                </View>
                            </View>
                        </Pressable>
                    )}
                />

                <Text style={[styles.titleCaption, { marginTop: 10 }]}>Atractivos Turísticos</Text>

                <FlatList
                    data={attractions}
                    horizontal
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingLeft: '5%', paddingRight: '5%' }}
                    renderItem={({ item }) => (
                        <Pressable 
                            onPress={() => navigation.navigate(
                                'AtractionInfo', { item },
                            )}
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? colors.NEW2 : colors.WHITE,
                                    opacity: pressed ? 0.9 : 1,
                                    transform: [ { scale: pressed ? 0.95 : 1, } ],
                                },
                                styles.viewCommerce
                            ]}
                        >
                            <View>
                                <Image
                                    source={{ uri: item.photo1 }}
                                    style={styles.imageCommerce}
                                    resizeMode='cover'
                                    resizeMethod='resize'
                                />
                                <View style={styles.ctnInfoCommerce}>
                                    <Text style={styles.txtNameCommerce}>{item.name}</Text>
                                </View>
                            </View>
                        </Pressable>
                    )}
                />

                <View style={[styles.rowView, styles.rowGift]}>
                    <View style={styles.viewGiftImage}>
                        <Image
                            source={(require('../../../assets/img/gift-box.png'))}
                            style={styles.imageGift}
                            resizeMode='contain'
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.txtUpGift}>Promociones y Beneficios</Text>
                        <Text style={styles.txtDownGift}>Busca nuestro el logo de Visit Baños, y obtendrás excelentes Promociones y Beneficios..!</Text>
                    </View>

                </View>

                <Pressable
                    onPress={() => Linking.openURL('https://www.funtripecuador.com/')}
                    style={{
                        marginVertical: 10,
                        paddingHorizontal: '5%'
                    }}
                >
                    <>
                        <Image
                            source={(require('../../../assets/img/senderismo.jpeg'))}
                            style={styles.imageTrekking}
                            resizeMode='contain'
                        />
                        <View style={styles.viewTrek}>
                            <Text style={styles.txtTrekking}>Senderismo en Baños Ecuador</Text>
                            <Text style={styles.txtTrekkingDown}>Descarga la App Your Fun Trip Ecuador</Text>
                        </View>
                    </>
                </Pressable>

                <Text style={[styles.copyrigth, { marginTop: 20}]}>Un aporte de la Cámara de Turismo - CAMTUR Baños</Text>
                <Text style={styles.copyrigth}>Copyright 2022 - Derechos Reservados</Text>
                <Text style={styles.copyrigth}>V.2022.1.0</Text>

                <View style={{ height: 150, width: '100%'}} />

            </ScrollView>
        )}
        </>
    )
}
 
export default Home;