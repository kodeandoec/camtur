import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../utils/colors';

const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '2.5%',
        backgroundColor: colors.WHITE,
    },
    wrapper: {
        height: height / 2,
    },
    slide: {
        width,
        height: height / 2,
    },
    image:{
        width: '100%',
        height: height / 2,
        borderRadius: 15
    },
    content:{
        paddingVertical: 20,
    },
    contenData:{
        paddingHorizontal: '2.5%',
        backgroundColor: colors.WHITE,
        borderRadius: 20,
        marginBottom: 20,
    },
    name:{
        fontSize: 32,
        lineHeight: 36,
        fontFamily: 'Poppins-Bold',
        color: colors.BLACK,
        marginBottom: 10,
    },
    description:{
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: colors.BLACK,
        marginBottom: 10,
        textAlign: 'justify',
    },
    btnGetDirections:{
        width: '90%',
        backgroundColor: colors.GREEN,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        top: -20,
        alignSelf: 'center',
    },
    btnText:{
        color: colors.WHITE,
        fontSize: 17,
        lineHeight: 17,
        fontFamily: 'Poppins-Bold',
        textAlign: 'center',
        alignSelf: 'center'
    },
    map:{
        height: 300,
        width: '100%',
        borderRadius: 15,
        marginTop: 20,
    },
    marker:{
        width: 36,
        height: 36,
    },
    txtDesciption:{
      color: colors.GRAY,
      fontFamily: "Poppins-Regular", 
      fontSize: 18, 
      lineHeight: 19, 
      textAlign:'justify',
      marginTop: 20
    },
    viewInfo:{
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingVertical: 10,
        borderBottomColor: colors.SILVER,
        borderBottomWidth: 1,
    },
    icon:{
        backgroundColor: colors.GREEN,
        padding: 5,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtInfo:{
        flex: 1,
        fontSize: 17,
        lineHeight: 21,
        fontFamily: 'Poppins-Regular',
        marginLeft: 10,
        color: colors.BLACK,
    },
    timer:{
        fontSize: 19,
        fontFamily: 'Poppins-Bold',
        color: colors.BLACK,
    },
    lineBottom:{
        backgroundColor: colors.NEW5,
        height: 3.9,
        width: '15%',
        marginBottom: 10,
        borderRadius: 50,
    },
    callNow:{
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: colors.GREEN,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    callNowUp:{
        fontSize: 10,
        lineHeight: 12,
        fontFamily: 'Poppins-Regular',
        color: colors.WHITE,
        textAlign: 'center',
    },
    callNowDown:{
        fontSize: 16,
        lineHeight: 18,
        fontFamily: 'Poppins-Semibold',
        color: colors.WHITE,
        textAlign: 'center',
    },
    verified:{
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: colors.WHITE,
        marginLeft: 3
    },
    viewVerified:{
        position: 'absolute',
        top: 10,
        right: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.NEW1,
        borderRadius: 200,
        padding: 10,
        zIndex: 1,
    },
});