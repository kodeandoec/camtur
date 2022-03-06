import React, { Fragment } from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';

import { 
    View, 
    Text, 
    Animated, 
    StyleSheet,
    Platform, 
    Button,
    Image, 
    FlatList,
    Pressable
} from 'react-native';

import useAtractions from '../../../hooks/useAtractions';
import useCommerces from '../../../hooks/useCommerces';
import useCategories from '../../../hooks/useCategories';

import colors from '../../../utils/colors';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ExploreEn = ( { navigation } ) => {

    const { state: attractions } = useAtractions();
    const { state: commerces } = useCommerces();

    const { state, loading } = useCategories();

    const { top } = useSafeAreaInsets();

    let map = '';

    return ( 

        <View style={{flex:1}}>

            <MapView 
                ref={ref => { map = ref }}
                provider={PROVIDER_GOOGLE}
                style={{flex:1}}
                mapType="standard"
                compassEnabled={true}
                followsUserLocation={true}
                showsMyLocationButton={true}
                zoomEnabled={true}
                zoomControlEnabled={false}
                region={{
                    latitude: -1.395919,
                    longitude: -78.427127,
                    latitudeDelta: 0.033698,
                    longitudeDelta: 0.033698
                }}   
                showsScale={true}  
                loadingEnabled={true}                            
                onLayout={() => {
                    map.animateCamera({
                        center: {
                            latitude: -1.395919,
                            longitude: -78.427127,
                        },
                        heading: 0,
                        pitch: 90,
                    });
                }}
            >  

                {attractions.map( atractivos => {

                    const { id, name, latitude, longitude, photo1 } = atractivos;

                    return(
                        <Fragment key={id}>                            
                            <Marker
                                pinColor="#ff00cc"
                                style={styles.markercontainer}
                                coordinate={{              
                                    latitude: Number(latitude),
                                    longitude: Number(longitude),
                                }}                                
                            >
                                <View style={{ backgroundColor: 'white', padding: 2, borderRadius: 20}}>
                                    <Animated.Image
                                        source={require('../../../../assets/img/pin-green.png')}
                                        style={[styles.marker]}
                                        resizeMode="contain"
                                    />
                                </View>
                                <Callout tooltip
                                    onPress={() => navigation.navigate(
                                        'AtractionInfoEn', { item: atractivos },
                                    )}
                                >
                                    <View >
                                        <View style={styles.bubble}>
                                            <Image 
                                                source={{ uri: photo1 }}
                                                style={{ width: 150, height: 70, borderRadius: 10, marginBottom: 5 }}
                                                resizeMode="cover"
                                            />
                                            <Text style={styles.name}>{name}</Text>
                                            <Button 
                                                title='Visit Attractive'   
                                                color="#841548"
                                            />
                                        </View>
                                        <View style={styles.arrowBorder}></View>
                                    </View>
                                </Callout>
                            </Marker>
                        </Fragment>
                    )

                })}
                
                {commerces.map( commerce => {

                    const { id, name, latitude, longitude, photo1, type } = commerce;

                    return(
                        <Fragment key={id}>                            
                            <Marker
                                pinColor="#ff00cc"
                                style={styles.markercontainer}
                                coordinate={{              
                                    latitude: Number(latitude),
                                    longitude: Number(longitude),
                                }}                                
                            >
                                <View style={{ backgroundColor: 'white', padding: 2, borderRadius: 20}}>
                                    <Animated.Image
                                        source={require('../../../../assets/img/pin-red.png')}
                                        style={[styles.marker]}
                                        resizeMode="contain"
                                    />
                                </View>
                                
                                { type === 'commerceFull' ? (
                                    <Callout tooltip
                                        onPress={() => navigation.navigate(
                                            'CommerceEn', { item: commerce },
                                        )}
                                    >
                                        <View >
                                            <View style={styles.bubble}>
                                                <Image 
                                                    source={{ uri: photo1 }}
                                                    style={{ width: 150, height: 90, borderRadius: 10, marginBottom: 5 }}
                                                    resizeMode="cover"
                                                />
                                                <Text style={styles.name}>{name}</Text>
                                                <Button 
                                                    title='Visit Commerce'   
                                                    color="#841548"
                                                />
                                            </View>
                                            <View style={styles.arrowBorder}></View>
                                        </View>
                                    </Callout>
                                ) : (
                                    <Callout tooltip
                                        onPress={() => console.log('hello')}
                                    >
                                        <View >
                                            <View style={styles.bubble}>
                                                <Image 
                                                    source={{ uri: photo1 }}
                                                    style={{ width: 150, height: 90, borderRadius: 10, marginBottom: 5 }}
                                                    resizeMode="cover"
                                                />
                                                <Text style={styles.name}>{name}</Text>
                                            </View>
                                            <View style={styles.arrowBorder}></View>
                                        </View>
                                    </Callout>
                                )}
                            </Marker>
                        </Fragment>
                    )
                    })}
            </MapView>

            <View style={[styles.legend, { top }]}>

                <View style={styles.legendBg}>
                    <Text style={styles.legendTitle}>Legend</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>

                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require('../../../../assets/img/pin-green.png')} style={styles.markerq}/>
                            <Text style={styles.legendSubTitle}>Atractions</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require('../../../../assets/img/pin-red.png')} style={styles.markerq}/>
                            <Text style={styles.legendSubTitle}>Commerces</Text>
                        </View>

                    </View>
                </View>

                <FlatList
                    data={state}
                    horizontal
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingRight: '5%' }}
                    renderItem={({ item }) => (
                        <Pressable 
                            onPress={() => navigation.navigate(
                                'CategoryListEn', 
                                { 
                                    id: item.id, 
                                    name: item.category_en 
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
                                    <Text style={styles.txtName}>{item.category_en}</Text>
                                </View>
                            </View>
                        </Pressable>
                    )}
                />
            </View> 
    </View> 
    );
}


const styles = StyleSheet.create({
    ctnInfo:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    txtName:{
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        color: colors.BLACK,
        textAlign: 'center',
        marginLeft: 15,
        marginRight: 15,
    },
    markerq: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
    legendTitle: {
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
        marginBottom: 10,
        color: 'white',
        alignSelf: 'center',
    },
    legendSubTitle: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: 'white',
    },
    legend: {
        position: 'absolute', 
        left: 10, 
        right: 10,
    }, 
    legendBg: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 10,
    },
    image:{
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    arrow:{
        backgroundColor: '#fff',
        borderColor: 'transparent',
        borderTopColor: '#fff',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -32
    },
    arrowBorder:{
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#fff',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -1
    },
    name:{
        fontSize: 16,
        marginBottom: 5,
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center'
    },
    descripcion:{
        fontSize: 14,
        marginBottom: 5,
        fontFamily: 'Poppins-Regular',
        textAlign: 'justify'
    },
    bubble: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 15,
        width: 190
    },
  formSection: {
    borderRadius:20,
    borderColor:'black',
    borderWidth:1,
    marginBottom:20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  textInputEmail:{
    color:'white',
    marginTop:0,
    width:'80%',
    marginLeft:10,
    marginRight:10
    },
    marker: {
        width: 38,
        height: 38,
    },
    markerHome: {
        width: 32,
        height: 32,
    },
    markercontainer:{
      shadowColor: '#000000',
      shadowOpacity: 0.8,
      shadowRadius: 4,
      shadowOffset: {
        height: 2,
        width: 0
      }
    },
    textoMapa:{
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
      fontSize: 16,
      color: '#FFF',
    },
    searchBox: {
        position:'absolute', 
        marginTop: Platform.OS === 'ios' ? 60 : 50, 
        backgroundColor: '#000',
        width: '90%',
        alignSelf:'center',
        borderRadius: 8,
        padding: 10,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
    footerBox: {
        position:'absolute', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 100,
        backgroundColor: '#000',
        width: '90%',
        alignSelf:'center',
        borderRadius: 8,
        padding: 10,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },    
    counterBox: {
      position:'absolute', 
      bottom: 100,
      backgroundColor: '#000',
      width: '90%',
      alignSelf:'center',
      borderRadius: 8,
      padding: 10,
      shadowColor: '#ccc',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 10,
      height: 200
  },
    textoFooter:{
      fontFamily: 'Gotham',
      textAlign: 'center',
      fontSize: 10,
      color: '#FFF',
      textTransform: 'uppercase'
    },
    viewAttraction:{
        flexDirection: 'row',
    },
    imageCat:{
        width: 68,
        height: 68,
        borderRadius: 15,
    },
})
 
export default ExploreEn;