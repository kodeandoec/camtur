import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../utils/colors';

const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        paddingHorizontal: '5%',
    },
    welcomeUp:{
        fontSize: 20,
        fontFamily: 'Lato-Regular',
        color: colors.BLACK,
    },
    welcomeDown:{
        fontSize: 30,
        fontFamily: 'Lato-Black',
        color: colors.BLACK,
        marginBottom: 20
    },
    titulo:{
        color: colors.WHITE,
        fontSize: 18,
        lineHeight: 18,
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold',
        padding: 10,
    },
    txtConten:{
        color: colors.BLACK,
        fontSize: 18,
        lineHeight: 18,
        fontFamily: 'Lato-Regular',
        marginVertical: 10,
        textAlign: 'justify',
    },
    txtContent:{
        color: colors.BLACK,
        fontSize: 18,
        lineHeight: 22,
        fontFamily: 'Lato-Regular',
        marginVertical: 10,
        textAlign: 'justify',
    },
    txtContentD:{
        color: colors.BLACK,
        fontSize: 18,
        lineHeight: 20,
        fontFamily: 'Lato-Regular',
        marginVertical: 2,
    },
    titles:{
        color: colors.GRAY,
        fontSize: 20,
        lineHeight: 20,
        fontFamily: 'Lato-Black',
        marginTop: 40,
        marginBottom: 10,
    },
    image:{
        width: '100%',
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
        lineHeight: 17,
        fontFamily: 'Lato-Regular',
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
        lineHeight: 17,
        fontFamily: 'Lato-Bold',
        textAlign: 'center',
        alignSelf: 'center'
    },
    copyrigth:{
        color: colors.GRAY,
        fontSize: 15,
        lineHeight: 15,
        fontFamily: 'Lato-Bold',
        alignSelf: 'center'
    },
});