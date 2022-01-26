import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../utils/colors';

const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        flex: 1,
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
        width,
        height: height / 2,
    },
    content:{
        paddingHorizontal: '5%',
        paddingVertical: 20,
        backgroundColor: colors.WHITE,
        borderRadius: 20,
        top: -20,
    },
    name:{
        fontSize: 32,
        lineHeight: 32,
        fontFamily: 'Lato-Bold',
        color: colors.BLACK,
        marginBottom: 10,
    },
    description:{
        fontSize: 16,
        fontFamily: 'Lato-Regular',
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
        fontFamily: 'Lato-Bold',
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
      fontFamily: "Lato-Regular", 
      fontSize: 18, 
      lineHeight: 19, 
      textAlign:'justify',
      marginTop: 20
    },
    viewInfo:{
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingVertical: 7,
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
        lineHeight: 17,
        fontFamily: 'Lato-Regular',
        marginLeft: 10,
    },
    timer:{
        fontSize: 19,
        fontFamily: 'Lato-Bold',
        color: colors.BLACK,
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'justify',
        textTransform: 'uppercase',
    },
});