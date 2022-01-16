import React from 'react'
import { 
    View, 
    Text, 
    StatusBar, 
    ScrollView, 
    Image, 
    TouchableHighlight,
    Linking,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import getDirections from 'react-native-google-maps-directions'

import Feather from 'react-native-vector-icons/Feather';

import styles from './index.styles'
import colors from '../../utils/colors';
 
const Information = () => {

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
                source={require('../../../assets/img/banner.png')}
                style={styles.image}
                resizeMode='contain'
                resizeMethod='resize'
            />
            
            <Text style={styles.welcomeUp}>Cámara de turismo de</Text>
            <Text style={styles.welcomeDown}>Baños de Agua Santa</Text>

            <View style={styles.viewInfo}>
                <View style={styles.icon}>
                    <Feather name="map-pin" size={20} color={colors.WHITE} />
                </View>
                <Text style={styles.txtInfo}>Halflants 6 - 26 y Ambato, Baños de Agua Santa - Tungurahua - Ecuador</Text>
            </View>

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

            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
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
                <Text style={styles.btnText}>Llévame a la oficina de la CAMTUR</Text>
            </TouchableHighlight>

            <Text style={[styles.welcomeUp, {marginTop: 50}]}>Información importante sobre</Text>
            <Text style={styles.welcomeDown}>Baños de Agua Santa</Text>

            <Text style={styles.txtConten}>Baños está ubicado a 170 km (3 horas en auto) de Quito, la capital del Ecuador, 300 km (5 horas) de Guayaquil, y 62 km (1 hora) de la Amazonía.</Text>

            <Text style={styles.txtConten}> Su entorno es único, rodeado de montañas, 70 cascadas y agua termal.</Text> 
            
            <Text style={styles.txtConten}>El clima es primaveral, con una temperatura promedio de 17 - 25°C todo el año, y algunos días de lluvia.</Text>

            <Text style={styles.titles}>Baños es la capital de la Aventura y SPAS del Ecuador.</Text>

            <Text style={styles.txtContent}>La ciudad es una mezcla de experiencias. El entorno es único: puede ver cascadas - y bañarse en ellas -, caminar a través de inexplorados senderos y bosques, cruzar ríos colgado de un cable,relajar su cuerpo en aguas termales y maravillosos SPAS, ir en bicicleta o en bote hasta la Amazonía,  y maravillarse con la erupción ocasional del activo Volcán Tungurahua.</Text>

            <Text style={styles.txtContent}>En Baños existen 150 hoteles, 200 restaurantes, bares y discotecas, 83 operadoras de turismo, 50 SPAS y 6 compañías de transporte turístico.</Text>

            <Text style={styles.txtContent}>Baños es un centro energético porque se encuentra en el flanco oriental del activo volcán Tungurahua (5.016m) rodeado de los Parques Nacionales Sangay y Llanganates y su corredor ecológico declarado por la World Wildlife Fund - I (WWF) como un “Regalo para la Tierra” en el 2002.</Text>

            <Text style={styles.txtContent}>Baños es el principal destino de los Andes para aventura, descanso y diversión en Ecuador.</Text>

            <Text style={styles.txtContent}>Las opciones de Aventura y Spa que ofrece Baños, son la combinación perfecta de su viaje a las islas Galápagos y Quito en Ecuador.</Text>

            <Text style={styles.titles}>Distancias en avión, desde - hasta</Text>
            <Text style={styles.txtContentD}>- New York - Quito: 7 horas</Text>
            <Text style={styles.txtContentD}>- Miami - Quito: 4 horas</Text>
            <Text style={styles.txtContentD}>- Bogotá - Quito: 1 horas 24 min.</Text>
            <Text style={styles.txtContentD}>- Lima - Guayaquil: 2 horas</Text>
            <Text style={styles.txtContentD}>- Guayaquil - Quito: 51 min.</Text>

            <Text style={styles.titles}>Distancias en Auto, desde - hasta</Text>
            <Text style={styles.txtContentD}>- Quito (área comercial, Av. 12 de Octubre) - Baños: 3 horas / 180 km</Text>
            <Text style={styles.txtContentD}>- Aeropuerto de Quito - Baños: 3 h. 30 min. / 213 km</Text>
            <Text style={styles.txtContentD}>- Ambato - Baños: 1 horas / 40 km</Text>
            <Text style={styles.txtContentD}>- Puyo (Amazonía) -  Baños: 1 horas / 60 km</Text>
            <Text style={styles.txtContentD}>- Guayaquil - Baños: 5h. 30 min. / 300 km</Text>

            <Text style={styles.titles}>Clima en Baños de Agua Santa</Text>
            <Text style={styles.txtContentD}>- Primaveral todo el año. </Text>
            <Text style={styles.txtContentD}>- Octubre a Diciembre: 20 - 25°C.</Text>
            <Text style={styles.txtContentD}>- Enero a Junio: 17 - 20°C, lluvia a veces.</Text>
            <Text style={styles.txtContentD}>- Julio a Septiembre: 15 - 20°C, días soleados y lluviosos.</Text>

            <Text style={[styles.copyrigth, { marginTop: 50}]}>Un aporte de CAMTUR Baños de Agua Santa</Text>
            <Text style={styles.copyrigth}>Copyright 2022 - Derechos Reservados</Text>
            <Text style={styles.copyrigth}>V.2022.1.0</Text>

            <View style={{ height: 150}} />
        </ScrollView>
    )
}
 
export default Information;