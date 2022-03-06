import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../../utils/colors';

const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F3F6',
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
        marginHorizontal: '5%',
        borderRadius: 10,
        padding: 10, 
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        position:'absolute',
        bottom: 5,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeUp:{
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        color: colors.WHITE,
    },
    welcomeDown:{
        fontSize: 30,
        fontFamily: 'Poppins-Black',
        color: colors.WHITE,
    },
    wrapper: {
        height: height / 2,
    },
    slide: {
        width: '100%',
        height: height / 5,
    },
    image:{
        width: '100%',
        height: height / 5,
        borderRadius: 20
    },
    titulo:{
        color: colors.WHITE,
        fontSize: 18,
        lineHeight: 19,
        fontFamily: 'Poppins-Regular',
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',
    },
    txtConten:{
        color: colors.BLACK,
        fontSize: 18,
        lineHeight: 18,
        fontFamily: 'Poppins-Regular',
        marginVertical: 10,
        textAlign: 'center',
    },
    txtContent:{
        color: colors.BLACK,
        fontSize: 18,
        lineHeight: 18,
        fontFamily: 'Poppins-Regular',
        marginVertical: 10,
        textAlign: 'justify',
    },
    titles:{
        color: colors.GREEN,
        fontSize: 22,
        lineHeight: 22,
        fontFamily: 'Poppins-Black',
        marginVertical: 10,
        textAlign: 'center',
    },
    headerView:{
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    headerImage:{
        width: 146,
        height: 40,
        marginRight: 10,
    },
    language:{
        width: 40,
        height: 40,
    },
    iconWeater:{
        width: 36,
        height: 36,
    },
    txtLanguage:{
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: colors.WHITE,
        textTransform: 'uppercase',
        marginRight: 5
    },
    languageView:{
        flexDirection: 'row', 
        alignItems: 'center',
        padding: 3,
        borderRadius: 100,
    },
    rowView:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtWelcomeUp:{
        fontSize: 28,
        fontFamily: 'Poppins-Regular',
        color: colors.BLACK,
        marginTop: 20,
    },
    txtWelcomeDown:{
        fontSize: 36,
        fontFamily: 'Poppins-SemiBold',
        color: colors.BLACK,
        marginBottom: 20,
        marginTop: -10,
    },
    txtWeaterDown:{
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
        color: colors.BLACK,
        textTransform: 'capitalize',
        marginTop: -5
    },
    txtWeaterUp:{
        fontSize: 18,
        fontFamily: 'Poppins-Black',
        color: colors.BLACK,
    },
    backgroundIcon:{
        padding: 3,
        borderRadius: 100,
        backgroundColor: colors.WHITE,
        marginRight: 5,
    },
    viewAttraction:{
        flexDirection: 'row',
    },
    imageCat:{
        width: 68,
        height: 68,
        borderRadius: 15,
    },
    ctnInfo:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    txtName:{
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        color: colors.BLACK,
        textAlign: 'center',
        marginLeft: 15,
        marginRight: 15,
    },
    titleCaption:{
        fontSize: 22,
        fontFamily: 'Poppins-SemiBold',
        color: colors.BLACK,
        paddingHorizontal: '5%',
    },
    searchView:{
        backgroundColor: colors.WHITE,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 30,
        marginHorizontal: '5%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 15,
    },
    searchInput:{
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: colors.BLACK,
    },
    searchIcon:{
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#F1F3F6',
    },
    viewCommerce:{
        width: width / 1.6,
        height: height / 3,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 3,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 8,
        marginTop: 10,
        marginBottom: 20,
        marginRight: 20
    },
    imageCommerce:{
        width: width / 1.6,
        height: height / 3,
        borderRadius: 20,
    },
    ctnInfoCommerce:{
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 20,
        zIndex: 1,
    },
    txtNameCommerce:{
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
        color: colors.WHITE,
    },
    txtAddresCommerce:{
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: colors.WHITE,
    },
    copyrigth:{
        color: colors.GRAY,
        fontSize: 12,
        fontFamily: 'Poppins-SemiBold',
        alignSelf: 'center'
    },
    imageGift:{
        width: 36,
        height: 36,
    },
    txtUpGift:{
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        color: colors.WHITE,
    },
    txtDownGift:{
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: colors.WHITE,
    },
    viewGiftImage:{
        padding: 10,
        borderRadius: 100,
        backgroundColor: colors.WHITE,
        marginRight: 10,
    },
    rowGift:{
        marginHorizontal: '5%',
        backgroundColor: colors.NEW5,
        borderRadius: 15,
        padding: 10,
        marginVertical: 10,
    },
    imageAttraction:{
        width: 120,
        height: 120,
        borderRadius: 20,
    },
    txtNameAttraction:{
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: colors.BLACK,
    },
    imageTrekking:{
        width: "100%",
        height: 250,
        borderRadius: 30,
    },
    viewTrek:{
        position: 'absolute',
        padding: 10,
        zIndex: 1,
        bottom: 20,
        left: 10,
        right: 10,
        marginHorizontal: '5%',
    },
    txtTrekking:{
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: colors.WHITE,
    },
    txtTrekkingDown:{
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
        color: colors.WHITE,
    }
});