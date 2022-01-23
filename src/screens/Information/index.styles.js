import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../utils/colors';

const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBF1EB',
        paddingHorizontal: '2%',
    },
    contenData:{
        marginHorizontal: '1%',
        paddingHorizontal: '5%',
        paddingVertical: 20,
        backgroundColor: colors.WHITE,
        borderRadius: 20,
        marginBottom: 20,
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
        lineHeight: 18,
        fontFamily: 'Lato-Regular',
        flex: 1,
        marginLeft: 10,
    },
    bgIcon:{
        backgroundColor: colors.GREEN,
        padding: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
});