import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../../utils/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        paddingHorizontal: '3%',
    },
    welcomeUp:{
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        color: colors.BLACK,
    },
    welcomeDown:{
        fontSize: 30,
        fontFamily: 'Poppins-Black',
        color: colors.BLACK,
        marginBottom: 10
    },
    image:{
        width: '100%',
        height: 250,
        borderRadius: 20,
    },
    viewAttraction:{
        marginBottom: 20,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 8,
    },
    ctnInfo:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        position: 'absolute',
        backgroundColor: 'rgba(10, 44, 0, 0.5)',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        padding: 20,
    },
    txtName:{
        fontSize: 28,
        fontFamily: 'Poppins-Bold',
        color: colors.WHITE,
        textAlign: 'center',
    },
    txtDescription:{
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: colors.WHITE,
    },
});