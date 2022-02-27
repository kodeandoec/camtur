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
        marginTop: 60
    },
    welcomeDown:{
        fontSize: 40,
        lineHeight: 40,
        fontFamily: 'Poppins-Black',
        color: colors.BLACK,
        marginBottom: 10
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 100,
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
        flex: 1,
        fontSize: 18,
        fontFamily: 'Poppins-Bold',
        color: colors.BLACK,
        marginBottom: 5,
    },
    txtDate:{
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: colors.BLACK,
        marginLeft: 5,
    },
});