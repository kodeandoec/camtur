import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../utils/colors';

const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    viewTitle:{
        marginTop: 30,
        padding: 10, 
        right: 0,
        left: 0,
        marginHorizontal: '5%', 
        position:'absolute',
        zIndex: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewTextSwiper:{
        padding: 10, 
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginHorizontal: '5%', 
        position:'absolute',
        bottom: 90,
        zIndex: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeUp:{
        fontSize: 20,
        fontFamily: 'Lato-Regular',
        color: colors.WHITE,
    },
    welcomeDown:{
        fontSize: 30,
        fontFamily: 'Lato-Black',
        color: colors.WHITE,
    },
    wrapper: {
        height: height - 30,
    },
    slide: {
        width,
        height: height - 30,
    },
    cntImg:{
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        shadowColor: colors.BLACK,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
    },
    image:{
        width,
        height: height - 30,
    },
    titulo:{
        color: colors.WHITE,
        fontSize: 18,
        lineHeight: 18,
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',
    },
    txtConten:{
        color: colors.BLACK,
        fontSize: 18,
        lineHeight: 18,
        fontFamily: 'Lato-Regular',
        marginVertical: 10,
        textAlign: 'center',
    },
    txtContent:{
        color: colors.BLACK,
        fontSize: 18,
        lineHeight: 18,
        fontFamily: 'Lato-Regular',
        marginVertical: 10,
        textAlign: 'justify',
    },
    titles:{
        color: colors.GREEN,
        fontSize: 22,
        lineHeight: 22,
        fontFamily: 'Lato-Black',
        marginVertical: 10,
        textAlign: 'center',
    },
});