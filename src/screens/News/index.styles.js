import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../utils/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        paddingHorizontal: '5%'
    },
    welcomeUp:{
        fontSize: 28,
        lineHeight: 32,
        fontFamily: 'Poppins-Regular',
        color: colors.BLACK,
        marginTop: 5,
    },
    welcomeDown:{
        fontSize: 36,
        lineHeight: 40,
        fontFamily: 'Poppins-SemiBold',
        color: colors.BLACK,
    },
    image:{
        width: 75,
        height: 75,
        borderRadius: 20,
    },
    viewAttraction:{
        borderBottomColor: colors.BG,
        borderBottomWidth: 1,
        paddingVertical: 10,
    },
    ctnInfo:{
        borderRadius: 20,
        position: 'absolute',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(10, 44, 0, 0.6)',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        padding: 20,
    },
    txtName:{
        flex: 1,
        fontSize: 18,
        lineHeight: 22,
        fontFamily: 'Poppins-Bold',
        color: colors.BLACK,
    },
    txtDate:{
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: colors.BLACK,
        marginLeft: 5,
    },
});