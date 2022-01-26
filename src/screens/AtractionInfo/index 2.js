import React from 'react'
import { 
    View, 
    Text,
    TouchableHighlight,
    Image,
    ScrollView,
    Dimensions
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import getDirections from 'react-native-google-maps-directions'
import Swiper from 'react-native-swiper';

import RenderHtml from 'react-native-render-html';

import styles from './index.styles'
import colors from '../../utils/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('screen');
 
const AtractionInfo = ({ route, navigation }) => {

    const { item } = route.params;

    const { top } = useSafeAreaInsets();

    const handleGetDirections = () => {
        const data = {
            destination: {
                latitude: Number(item.latitude),
                longitude: Number(item.longitude),
            },
            params: [
                {
                    key: "travelmode",
                    value: "driving"        // may be "walking", "bicycling" or "transit" as well
                },
                {
                    key: "dir_action",
                    value: "navigate"       // this instantly initializes navigation using the given travel mode
                }
            ],
        }

        getDirections(data)
    }

    return (
        <ScrollView 
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <TouchableHighlight
                style={{ 
                    position: 'absolute', 
                    top, 
                    left: 20, 
                    zIndex: 10,
                    backgroundColor: colors.WHITE,
                    borderRadius: 200,
                    padding: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                 }}
                 onPress={ () => navigation.goBack() }
            >
                <Feather name="arrow-left" size={30} color={colors.GREEN} />
            </TouchableHighlight>
            <Swiper 
                style={styles.wrapper} 
                showsButtons={false}
                showsPagination={false}
                autoplay={true}
                autoplayTimeout={3.5}
                loop={true}
            >
                { item.photo1 && (
                    <Image
                        source={{ uri: item.photo1 }}
                        style={styles.image}
                        resizeMode='cover'
                        resizeMethod='resize'
                    />
                )}
                { item.photo2 && (
                    <Image
                        source={{ uri: item.photo2 }}
                        style={styles.image}
                        resizeMode='cover'
                        resizeMethod='resize'
                    />
                )}
                { item.photo3 && (
                    <Image
                        source={{ uri: item.photo3 }}
                        style={styles.image}
                        resizeMode='cover'
                        resizeMethod='resize'
                    />
                )}
                { item.photo4 && (
                    <Image
                        source={{ uri: item.photo4 }}
                        style={styles.image}
                        resizeMode='cover'
                        resizeMethod='resize'
                    />
                )}
                { item.photo5 && (
                    <Image
                        source={{ uri: item.photo5 }}
                        style={styles.image}
                        resizeMode='cover'
                        resizeMethod='resize'
                    />
                )}
            </Swiper>

            <View style={styles.content}>
                <Text style={styles.name}>{item.name}</Text>
                <RenderHtml
                    contentWidth={width}
                    source={{html: item.description_es}}
                    style={styles.txtDesciption}
                    tagsStyles={tagsStyles}
                />
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    mapType="satellite"
                    region={{
                        latitude: Number(item.latitude),
                        longitude: Number(item.longitude),
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: Number(item.latitude),
                            longitude: Number(item.longitude),
                        }}
                    >
                        <View style={[styles.markerWrap]}>
                            <Image
                            source={require('../../../assets/img/map-pin.png')}
                            style={styles.marker}
                            resizeMode="cover"
                            />
                        </View>
                    </MapView.Marker>
                </MapView>

                <TouchableHighlight
                    onPress={ () => handleGetDirections() }
                    underlayColor={colors.BLACK}
                    activeOpacity={0.8}
                    style={styles.btnGetDirections}
                >
                    <Text style={styles.btnText}>Llévame a este lugar</Text>
                </TouchableHighlight>
            </View>
            <View style={{ height: 50 }} />
        </ScrollView>
    )
}

const tagsStyles = {
    body: {
      whiteSpace: 'normal',
      color: colors.BLACK,
      fontSize: 16,
      fontFamily: "Lato-Regular",
      textAlign: 'justify',
    },
    a: {
      color: colors.BLACK,
      fontSize: 16,
      textDecorationLine: 'underline',
      fontStyle: 'italic',
    },
    li: {
      fontStyle: 'normal',
    },
    em: {
      fontStyle: 'normal',
    },
}
 
export default AtractionInfo;