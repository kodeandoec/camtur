import React from 'react'
import { 
    View, 
    Text,
    Image,
    ActivityIndicator
 } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Swiper from 'react-native-swiper'
import useBanner from '../../hooks/useBanner'
import colors from '../../utils/colors'

import styles from './index.styles'
 
const Home = () => {

    const { top } = useSafeAreaInsets();

    const { state, loading } = useBanner()

    return (
        <>
        { loading ? (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color={colors.GREEN} />
            </View>
         ) 
        : (
            <ScrollView 
                style={styles.container}
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <View style={styles.viewTitle}>
                        {/* <Text style={styles.welcomeUp}>Bienvenido a</Text>
                        <Text style={styles.welcomeDown}>Baños de Agua Santa</Text> */}
                        <Image
                            style={{ width: "90%", height: 150 }}
                            source={require('../../../assets/img/logo.png')}
                            resizeMethod='resize'
                            resizeMode='contain'
                        />
                    </View>
                    <Swiper 
                        style={styles.wrapper} 
                        showsButtons={false}
                        showsPagination={false}
                        autoplay={true}
                        autoplayTimeout={3.5}
                        loop={true}
                    >
                        { state.map( (item, index) => {
                            return (
                                <View style={styles.slide} key={index}>
                                    <View style={styles.cntImg}>
                                        <Image
                                            source={{ uri: item.photoUrl }}
                                            style={styles.image}
                                            resizeMode='cover'
                                            resizeMethod='resize'
                                        />
                                    </View>
                                    <View style={styles.viewTextSwiper}>
                                        <Text style={styles.titulo}>{item.text_es}</Text>
                                    </View>
                                </View>
                            )
                        })}
                    </Swiper>
                </View>

            </ScrollView>
        )}
        </>
    )
}
 
export default Home;