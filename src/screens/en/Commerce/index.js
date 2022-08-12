import React from 'react'
import { 
    View, 
    Text,
    TouchableHighlight,
    Image,
    ScrollView,
    Dimensions,
    Linking,
    Alert
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import getDirections from 'react-native-google-maps-directions'
import Swiper from 'react-native-swiper';

import RenderHtml from 'react-native-render-html';

import styles from './index.styles'
import colors from '../../../utils/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('screen');
 
const Commerce = ({ route, navigation }) => {

    const { item } = route.params;

    const { top } = useSafeAreaInsets();

    const openWhatsApp = () => {
        const message = "Hello! I would like information about " + item.name ;
        const cellNumber = '593' + item.whatsapp;
    
        var url = 'whatsapp://send?text=' +  message + '&phone=' + cellNumber;
        
        Linking.openURL(url)
          .then(data => {
            console.log("WhatsApp Opened successfully " + data);
          })
          .catch(() => {
            Alert.alert(
              "Error..!",
              "An error has occurred when opening WhatsApp and you do not have the app installed..!",
              [
                { text: "OK" }
              ]
            );
          });
    };

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
            style={[styles.container, { top }]}
            showsVerticalScrollIndicator={false}
        >
            <TouchableHighlight
                style={{ 
                    position: 'absolute', 
                    top: 5, 
                    left: 5, 
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

            <View>
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
            </View>
            <View style={styles.content}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    { item.type === 'commerceFull' ? (
                        <View style={styles.viewVerified}>
                            <MaterialIcons name="verified" size={22} color={colors.WHITE} />
                            <Text style={styles.verified}>Verified</Text>
                        </View>
                    ) : null}
                    <TouchableHighlight 
                        style={styles.callNow}
                        onPress={ () => Linking.openURL(`tel:${item.mainPhone}`) }
                    >
                        <>
                            <Feather name="phone-call" size={28} color={colors.WHITE} />
                        </>
                    </TouchableHighlight>
                </View>
                
                <View style={[ styles.contenData, { marginTop: 20 } ]}>
                    <Text style={styles.name}>{item.name}</Text>

                    <RenderHtml
                        contentWidth={width}
                        source={{html: item.description_en}}
                        style={styles.txtDesciption}
                        tagsStyles={tagsStyles}
                    />
                </View>

                <View style={[styles.contenData]}>
                    <Text style={styles.timer}>Price:</Text>
                    

                    <RenderHtml
                        contentWidth={width}
                        source={{html: item.price_en}}
                        style={styles.txtDesciption}
                        tagsStyles={tagsStyles}
                    />
                </View>

                <View style={styles.contenData}>
                    <Text style={styles.timer}>Business hours:</Text>
                    

                    <RenderHtml
                        contentWidth={width}
                        source={{html: item.time_en}}
                        style={styles.txtDesciption}
                        tagsStyles={tagsStyles}
                    />
                </View>

                <View style={[styles.contenData]}>
                    <Text style={styles.timer}>Contact:</Text>
                    

                    <TouchableHighlight
                        style={styles.viewInfo}
                        onPress={ () => handleGetDirections() }
                        underlayColor={colors.BG}
                    >
                        <>
                        <View style={styles.icon}>
                            <Feather name="home" size={20} color={colors.WHITE} />
                        </View>
                        <Text style={styles.txtInfo}>{item.address}</Text>
                        </>
                    </TouchableHighlight>

                    { item.phone ? (
                        <TouchableHighlight
                            style={styles.viewInfo}
                            onPress={() => Linking.openURL(`tel:${item.phone}`)}
                            underlayColor={colors.BG}
                        >
                            <>
                            <View style={styles.icon}>
                                <Feather name="phone-call" size={20} color={colors.WHITE} />
                            </View>
                            <Text style={styles.txtInfo}>{item.phone}</Text>
                            </>
                        </TouchableHighlight>
                    ) : null }

                    { item.whatsapp ? (  
                        <TouchableHighlight
                            style={styles.viewInfo}
                            onPress={() => openWhatsApp()}
                            underlayColor={colors.BG}
                        >
                            <>
                            <View style={styles.icon}>
                                <Ionicons name="logo-whatsapp" size={20} color={colors.WHITE} />
                            </View>
                            <Text style={styles.txtInfo}>{item.whatsapp}</Text>
                            </>
                        </TouchableHighlight>
                    ) : null }

                    { item.email ? (
                        <TouchableHighlight
                            style={styles.viewInfo}
                            onPress={() => Linking.openURL('mailto:' + item.email)}
                            underlayColor={colors.BG}
                        >
                            <>
                            <View style={styles.icon}>
                                <Feather name="mail" size={20} color={colors.WHITE} />
                            </View>
                            <Text style={styles.txtInfo}>{item.email}</Text>
                            </>
                        </TouchableHighlight>
                    ) : null }

                    { item.facebook ? (  
                        <TouchableHighlight
                            style={styles.viewInfo}
                            onPress={() => Linking.openURL(item.facebook)}
                            underlayColor={colors.BG}
                        >
                            <>
                            <View style={styles.icon}>
                                <Feather name="facebook" size={20} color={colors.WHITE} />
                            </View>
                            <Text style={styles.txtInfo}>Facebook</Text>
                            </>
                        </TouchableHighlight>
                    ) : null }
                    
                    { item.instagram ? (  
                        <TouchableHighlight
                            style={styles.viewInfo}
                            onPress={() => Linking.openURL(item.instagram)}
                            underlayColor={colors.BG}
                        >
                            <>
                            <View style={styles.icon}>
                                <Feather name="instagram" size={20} color={colors.WHITE} />
                            </View>
                            <Text style={styles.txtInfo}>Instagram</Text>
                            </>
                        </TouchableHighlight>
                    ) : null }

                    { item.youtube ? (  
                        <TouchableHighlight
                            style={styles.viewInfo}
                            onPress={() => Linking.openURL(item.youtube)}
                            underlayColor={colors.BG}
                        >
                            <>
                            <View style={styles.icon}>
                                <Feather name="youtube" size={20} color={colors.WHITE} />
                            </View>
                            <Text style={styles.txtInfo}>Youtube</Text>
                            </>
                        </TouchableHighlight>
                    ) : null }

                    { item.web ? (  
                        <TouchableHighlight
                            style={styles.viewInfo}
                            onPress={() => Linking.openURL(item.web)}
                            underlayColor={colors.BG}
                        >
                            <>
                            <View style={styles.icon}>
                                <Feather name="globe" size={20} color={colors.WHITE} />
                            </View>
                            <Text style={styles.txtInfo}>{item.web}</Text>
                            </>
                        </TouchableHighlight>
                    ) : null }
                </View>

                <View style={ styles.contenData }>

                    <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.map}
                        mapType="standard"
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
                                source={require('../../../../assets/img/map-pin.png')}
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
                        <Text style={styles.btnText}>Take me to this place</Text>
                    </TouchableHighlight>
                </View>
            </View>

            <View style={{ height: 20 }} />
        </ScrollView>
    )
}

const tagsStyles = {
    body: {
      whiteSpace: 'normal',
      color: colors.BLACK,
      fontSize: 16,
      fontFamily: "Poppins-Regular",
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
 
export default Commerce;