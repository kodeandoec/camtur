import React from 'react'
import { 
    View, 
    Text,
    TouchableHighlight,
    Image,
    ScrollView,
    StatusBar
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

import styles from './index.styles'
import colors from '../../utils/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
 
const Map = ({ navigation }) => {

    const { top } = useSafeAreaInsets();

    return (
        <ScrollView 
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <StatusBar
                backgroundColor={colors.GRAY}
                barStyle="light-content"
            />
            <TouchableHighlight
                style={{ 
                    position: 'absolute', 
                    top, 
                    left: 10, 
                    zIndex: 10,
                    backgroundColor: colors.BG,
                    borderRadius: 200,
                    padding: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                 }}
                 onPress={ () => navigation.goBack() }
            >
                <Feather name="arrow-left" size={30} color={colors.GREEN} />
            </TouchableHighlight>

            <View style={styles.content}>
                <Text style={styles.nameUp}>Mapa Turístico de</Text>
                <Text style={styles.name}>Baños Ecuador</Text>

                <TouchableHighlight
                    underlayColor={colors.BG}
                    activeOpacity={0.8}
                    onPress={ () => navigation.navigate('ViewMap') }
                >
                    <>
                        <Image
                            source={ require('../../../assets/img/mapa-banos-1.png')}
                            style={{
                                width: '100%',
                                height: 300,
                                borderRadius: 20,
                            }}
                        />
                        <View style={styles.zoomBtn}>
                            <Feather name="zoom-in" size={30} color={colors.GREEN} />
                            <Text style={styles.txtZoom}>Click para hacer Zoom</Text>
                        </View>
                    </>
                </TouchableHighlight>

                <TouchableHighlight
                    underlayColor={colors.BG}
                    activeOpacity={0.8}
                    onPress={ () => navigation.navigate('ViewMapp') }
                    style={{ marginTop: 30 }}
                >
                    <>
                        <Image
                            source={ require('../../../assets/img/mapa-banos-2.png')}
                            style={{
                                width: '100%',
                                height: 400,
                                borderRadius: 20,
                            }}
                        />
                        <View style={styles.zoomBtn}>
                            <Feather name="zoom-in" size={30} color={colors.GREEN} />
                            <Text style={styles.txtZoom}>Click para hacer Zoom</Text>
                        </View>
                    </>
                </TouchableHighlight>

            </View>
        </ScrollView>
    )
}
 
export default Map;