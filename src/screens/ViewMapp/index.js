import React from 'react'
import { 
    View, 
    TouchableHighlight,
    Image,
    ScrollView,
    Dimensions,
    Animated
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

import styles from './index.styles'
import colors from '../../utils/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PinchGestureHandler, State } from 'react-native-gesture-handler'

const { width, height } = Dimensions.get('screen');
 
const ViewMapp = ({ navigation }) => {

    const { top } = useSafeAreaInsets();

    const scale = new Animated.Value(1)
    const onPinchEvent = Animated.event(
        [
            {
                nativeEvent: { scale: scale }
            }
        ],
        {
            useNativeDriver: true
        }
    )

    // const onPinchStateChange = event => {
    //     if (event.nativeEvent.oldState === State.ACTIVE) {
    //         Animated.spring(scale, {
    //             toValue: 1,
    //             useNativeDriver: true
    //         }).start()
    //     }
    // }

    return (
        <View
            style={styles.container}
        >
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
            <ScrollView 
                showsVerticalScrollIndicator={false}
                horizontal={true}
            >
                <PinchGestureHandler
                    onGestureEvent={onPinchEvent}
                >
                    <Animated.Image
                        source={require('../../../assets/img/mapa-banos-2.png')}
                        style={{
                            width: 1200,
                            height: height,
                            transform: [{ scale: scale }]
                        }}
                        resizeMode='contain'
                    />
                </PinchGestureHandler>
            </ScrollView>
        </View>
    )
}
 
export default ViewMapp;