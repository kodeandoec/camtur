import React from 'react'
import { 
    View, 
    Text, 
    StatusBar, 
    ScrollView, 
    Image, 
    TouchableHighlight,
    Linking,
    Platform,
    Alert
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import getDirections from 'react-native-google-maps-directions'

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './index.styles'
import colors from '../../../utils/colors';
 
const Information = ( {navigation} ) => {

    const handleGetDirections = () => {
        const data = {
            destination: {
                latitude: -1.3973845,
                longitude: -78.423649,
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

    const openWhatsApp = () => {
        const message = "Hello! I would like information about Baños..!";
        const cellNumber = '593999377340';
    
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

    const { top } = useSafeAreaInsets();
    return (
        <ScrollView 
            style={[styles.container, { paddingTop: top }]}
            showsVerticalScrollIndicator={false}
        >
            <StatusBar
                backgroundColor={colors.WHITE}
                barStyle="dark-content"
            />

            <Image 
                source={require('../../../../assets/img/banner.png')}
                style={styles.image}
                resizeMode='contain'
                resizeMethod='resize'
            />

            <View style={styles.contenData}>
                <Text style={styles.welcomeUp}>Cámara de turismo de</Text>
                <Text style={styles.welcomeDown}>Baños Ecuador</Text>

                <Text style={styles.timer}>Contact information:</Text>
                <View style={styles.lineBottom} />

                <View style={styles.viewInfo}>
                    <View style={styles.icon}>
                        <Feather name="map-pin" size={20} color={colors.WHITE} />
                    </View>
                    <Text style={styles.txtInfo}>Halflants 6 - 26 y Ambato, Baños - Tungurahua - Ecuador</Text>
                </View>

                <TouchableHighlight
                    style={styles.viewInfo}
                    onPress={() => openWhatsApp()}
                    underlayColor={colors.BG}
                >
                    <>
                    <View style={styles.icon}>
                        <Ionicons name="logo-whatsapp" size={20} color={colors.WHITE} />
                    </View>
                    <Text style={styles.txtInfo}>+593 99 937 7340</Text>
                    </>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.viewInfo}
                    onPress={() => Linking.openURL('tel:0059332741660')}
                    underlayColor={colors.BG}
                >
                    <>
                    <View style={styles.icon}>
                        <Feather name="phone-call" size={20} color={colors.WHITE} />
                    </View>
                    <Text style={styles.txtInfo}>+593 3 274 1660</Text>
                    </>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.viewInfo}
                    onPress={() => Linking.openURL('mailto:info@banostravel.com')}
                    underlayColor={colors.BG}
                >
                    <>
                        <View style={styles.icon}>
                            <Feather name="mail" size={20} color={colors.WHITE} />
                        </View>
                        <Text style={styles.txtInfo}>info@banostravel.com</Text>
                    </>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.viewInfo}
                    onPress={() => Linking.openURL('https://www.facebook.com/camturbanos/')}
                    underlayColor={colors.BG}
                >
                    <>
                    <View style={styles.icon}>
                        <Feather name="facebook" size={20} color={colors.WHITE} />
                    </View>
                    <Text style={styles.txtInfo}>@camturbanos</Text>
                    </>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.viewInfo}
                    onPress={() => Linking.openURL('https://www.instagram.com/camturbanos/')}
                    underlayColor={colors.BG}
                >
                    <>
                    <View style={styles.icon}>
                        <Feather name="instagram" size={20} color={colors.WHITE} />
                    </View>
                    <Text style={styles.txtInfo}>@camturbanos</Text>
                    </>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.viewInfo}
                    onPress={() => Linking.openURL('https://twitter.com/CamturB')}
                    underlayColor={colors.BG}
                >
                    <>
                    <View style={styles.icon}>
                        <Feather name="twitter" size={20} color={colors.WHITE} />
                    </View>
                    <Text style={styles.txtInfo}>@camturb</Text>
                    </>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.viewInfo}
                    onPress={() => Linking.openURL('https://www.banostravel.com')}
                    underlayColor={colors.BG}
                >
                    <>
                    <View style={styles.icon}>
                        <Feather name="globe" size={20} color={colors.WHITE} />
                    </View>
                    <Text style={styles.txtInfo}>www.banostravel.com</Text>
                    </>
                </TouchableHighlight>
            </View>

            <View style={styles.contenData}>
                <Text style={styles.timer}>Location map:</Text>
                <View style={styles.lineBottom} />
                <MapView
                    provider={Platform.OS === 'ios' ? null : PROVIDER_GOOGLE}
                    style={styles.map}
                    region={{
                        latitude: -1.3973845,
                        longitude: -78.423649,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: -1.3973845,
                            longitude: -78.423649,
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
                    <Text style={styles.btnText}>Take me to the CAMTUR</Text>
                </TouchableHighlight>
            </View>

            <View style={styles.contenData}>
                <TouchableHighlight
                    onPress={() => navigation.navigate("NewsEn")}
                    underlayColor={colors.BG}
                    style={styles.btnMenu}
                >
                    <>
                        <View style={styles.bgIcon}>
                            <Feather name="bookmark" size={22} color={colors.WHITE} />
                        </View>
                        <Text style={styles.txtInfos}>Tourist News</Text>
                        <Feather name="chevron-right" size={28} color={colors.GREEN} />
                    </>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => navigation.navigate("InfoBanosEn")}
                    underlayColor={colors.BG}
                    style={styles.btnMenu}
                >
                    <>
                        <View style={styles.bgIcon}>
                            <Feather name="info" size={22} color={colors.WHITE} />
                        </View>
                        <Text style={styles.txtInfos}>Information of Baños Ecuador</Text>
                        <Feather name="chevron-right" size={28} color={colors.GREEN} />
                    </>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => navigation.navigate("MapEn")}
                    underlayColor={colors.BG}
                    style={styles.btnMenu}
                >
                    <>
                        <View style={styles.bgIcon}>
                            <Feather name="map" size={22} color={colors.WHITE} />
                        </View>
                        <Text style={styles.txtInfos}>Tourist Map of Baños Ecuador</Text>
                        <Feather name="chevron-right" size={28} color={colors.GREEN} />
                    </>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => Linking.openURL('tel:911')}
                    underlayColor={colors.BG}
                    style={styles.btnMenu}
                >
                    <>
                        <View style={styles.bgIcon}>
                            <Feather name="phone-call" size={22} color={colors.WHITE} />
                        </View>
                        <Text style={styles.txtInfos}>Emergencies 911</Text>
                        <Feather name="chevron-right" size={28} color={colors.GREEN} />
                    </>
                </TouchableHighlight>
            </View>

            <Text style={[styles.copyrigth, { marginTop: 20}]}>A contribution from CAMTUR Baños</Text>
            <Text style={styles.copyrigth}>Copyright 2022 - All rights reserved</Text>
            <Text style={styles.copyrigth}>V.2022.1.0</Text>

            <View style={{ height: 150}} />
        </ScrollView>
    )
}
 
export default Information;