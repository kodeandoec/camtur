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
import Swiper from 'react-native-swiper';

import RenderHtml from 'react-native-render-html';

import styles from './index.styles'
import colors from '../../utils/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('screen');

import moment from 'moment';
import 'moment/locale/es'
 
const NewInfo = ({ route, navigation }) => {

    const { item } = route.params;

    const { top } = useSafeAreaInsets();

    const changeDate = (d) => {
        const myDate = moment(d).format('LL');
        return myDate
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
            </Swiper>

            <View style={styles.content}>
                <View style={styles.contenData}>
                    <Text style={styles.name}>{item.title_es}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
                        <Feather name="calendar" size={14} color={colors.BLACK} />
                        <Text style={styles.txtDate}>{changeDate(item.date)}</Text>
                    </View>
                    <RenderHtml
                        contentWidth={width}
                        source={{html: item.description_es}}
                        tagsStyles={tagsStyles}
                    />
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
 
export default NewInfo;