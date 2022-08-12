import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../../utils/colors';

const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        paddingHorizontal: '2%',
    },
    contenData:{
        paddingHorizontal: '5%',
        backgroundColor: colors.WHITE,
        borderRadius: 20,
        marginBottom: 20,
    },
    welcomeUp:{
        fontSize: 18,
        lineHeight: 22,
        fontFamily: 'Poppins-Regular',
        color: colors.BLACK,
    },
    welcomeDown:{
        fontSize: 30,
        lineHeight: 32,
        fontFamily: 'Poppins-Black',
        color: colors.BLACK,
        marginBottom: 20
    },
    titulo:{
        color: colors.WHITE,
        fontSize: 18,
        lineHeight: 18,
        fontFamily: 'Poppins-Regular',
        fontWeight: 'bold',
        padding: 10,
    },
    txtConten:{
        color: colors.BLACK,
        fontSize: 18,
        lineHeight: 18,
        fontFamily: 'Poppins-Regular',
        marginVertical: 10,
        textAlign: 'justify',
    },
    txtContent:{
        color: colors.BLACK,
        fontSize: 18,
        lineHeight: 22,
        fontFamily: 'Poppins-Regular',
        marginVertical: 10,
        textAlign: 'justify',
    },
    txtContentD:{
        color: colors.BLACK,
        fontSize: 18,
        lineHeight: 20,
        fontFamily: 'Poppins-Regular',
        marginVertical: 2,
    },
    titles:{
        color: colors.GRAY,
        fontSize: 20,
        lineHeight: 20,
        fontFamily: 'Poppins-Black',
        marginTop: 40,
        marginBottom: 10,
    },
    image:{
        width: '80%',
        marginHorizontal: '10%',
        height: 200,
        marginBottom: 20,
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
    txtInfo:{
        flex: 1,
        fontSize: 17,
        lineHeight: 19,
        fontFamily: 'Poppins-Regular',
        marginLeft: 10,
    },
    viewInfo:{
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingVertical: 5,
        borderBottomColor: colors.SILVER,
        borderBottomWidth: 1,
    },
    icon:{
        backgroundColor: colors.GREEN,
        padding: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
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
        fontFamily: 'Poppins-Bold',
        textAlign: 'center',
        alignSelf: 'center'
    },
    copyrigth:{
        color: colors.GRAY,
        fontSize: 12,
        fontFamily: 'Poppins-SemiBold',
        alignSelf: 'center'
    },
    btnMenu:{
        backgroundColor: colors.WHITE,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 8,
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    txtInfos:{
        color: colors.BLACK,
        fontSize: 18,
        lineHeight: 20,
        fontFamily: 'Poppins-SemiBold',
        flex: 1,
        marginLeft: 10,
    },
    bgIcon:{
        backgroundColor: colors.GREEN,
        padding: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
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
});