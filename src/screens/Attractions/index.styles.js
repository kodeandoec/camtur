import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../utils/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        paddingHorizontal: '5%',
    },
    welcomeUp:{
        fontSize: 28,
        lineHeight: 32,
        fontFamily: 'Poppins-Regular',
        color: colors.BLACK,
    },
    welcomeDown:{
        fontSize: 36,
        lineHeight: 40,
        fontFamily: 'Poppins-SemiBold',
        color: colors.BLACK,
        marginBottom: 20,
    },
    image:{
        width: '100%',
        height: 300,
        borderRadius: 20,
    },
    viewAttraction:{
        marginBottom: 20,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.41,
        shadowRadius: 5.11,
        elevation: 2,
    },
    ctnInfo:{
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        position: 'absolute',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(10, 44, 0, 0.6)',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,
    },
    txtName:{
        fontSize: 22,
        fontFamily: 'Poppins-Bold',
        color: colors.WHITE,
    },
    txtDescription:{
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: colors.WHITE,
    },
});