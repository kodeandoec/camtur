import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../../utils/colors';

const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        marginHorizontal: '2.5%',
    },
    wrapper: {
        height: height / 2.1,
    },
    slide: {
        width,
        height: height / 2.1,
    },
    image:{
        width: '100%',
        height: height / 2.1,
        borderRadius: 20,
    },
    content:{
        paddingVertical: 20,
    },
    contenData:{
        paddingHorizontal: '2.5%',
        paddingVertical: 20,
        backgroundColor: colors.WHITE,
        borderRadius: 20,
    },
    name:{
        fontSize: 32,
        lineHeight: 34,
        fontFamily: 'Poppins-Bold',
        color: colors.BLACK,
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
    txtDate:{
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: colors.BLACK,
        marginLeft: 5,
    },
});