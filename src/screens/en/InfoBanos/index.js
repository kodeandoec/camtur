import React from 'react'
import { 
    View, 
    Text,
    TouchableHighlight,
    Image,
    ScrollView,
    Dimensions,
    ActivityIndicator
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

import RenderHtml from 'react-native-render-html';

import styles from './index.styles'
import colors from '../../../utils/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('screen');

import useInfoBanos from '../../../hooks/useInfoBanos';
 
const InfoBanos = ({ navigation }) => {

    const { state, loading } = useInfoBanos();

    const { top } = useSafeAreaInsets();

    return (
        <>
            { loading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color={colors.GREEN} />
                </View>
            ) 
            : (
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

                    {state.map( (item, index) => (
                        <View key={index}>
                            <Image
                                source={{uri: item.image}}
                                style={{
                                    width: '100%',
                                    height: height / 2,
                                    borderRadius: 15
                                }}
                            />
                            <View style={[styles.content]}>
                                <View style={styles.contenData}>
                                    <Text style={styles.nameUp}>Important information of</Text>
                                    <Text style={styles.name}>Baños Ecuador</Text>
                                    <RenderHtml
                                        contentWidth={width}
                                        source={{html: item.description_en}}
                                        style={styles.txtDesciption}
                                        tagsStyles={tagsStyles}
                                    />
                                </View>
                            </View>
                        </View>
                    ))}
                    <View style={{ height: 20 }} />
                </ScrollView>
            )}
        </>
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
 
export default InfoBanos;