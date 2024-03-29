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
        height: 150,
        borderRadius: 20,
    },
    viewAttraction:{
        marginBottom: 20,
        borderRadius: 20,
    },
    ctnInfo:{
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginTop: 10
    },
    txtName:{
        fontSize: 22,
        fontFamily: 'Poppins-Bold',
        color: colors.BLACK,
    },
    txtDescription:{
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: colors.BLACK,
    },
});