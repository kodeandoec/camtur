import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../utils/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
    },
    welcomeUp:{
        fontSize: 30,
        lineHeight: 30,
        fontFamily: 'Poppins-Regular',
        color: colors.BLACK,
    },
    welcomeDown:{
        fontSize: 24,
        fontFamily: 'Poppins-SemiBold',
        color: colors.BLACK,
    },
    image:{
        width: 95,
        height: 95,
        borderRadius: 75 / 4,
    },
    viewAttraction:{
        borderBottomColor: colors.BG,
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: '3%',
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
        fontSize: 18,
        fontFamily: 'Poppins-Bold',
        color: colors.BLACK,
        marginBottom: 2,
    },
    txtDate:{
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
        color: colors.BLACK,
        marginLeft: 5,
    },
    verified:{
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
        color: colors.WHITE,
        marginLeft: 3
    },
    viewVerified:{
        position: 'absolute',
        top: -4,
        left: -2,
        backgroundColor: colors.GREEN,
        borderRadius: 100,
        padding: 5,
    },
});