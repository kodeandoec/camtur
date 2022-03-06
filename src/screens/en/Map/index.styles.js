import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../../utils/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
    },
    content:{
        flex: 1,
        paddingHorizontal: '4%',
        paddingVertical: 20,
        borderRadius: 20,
        top: 60,
        paddingBottom: 100
    },
    name:{
        fontSize: 32,
        fontFamily: 'Poppins-Bold',
        color: colors.BLACK,
        marginBottom: 10,
    },
    nameUp:{
        fontSize: 22,
        fontFamily: 'Poppins-Regular',
        color: colors.BLACK,
        marginTop: 20
    },
    zoomBtn:{
        position: 'absolute', 
        bottom: 20, 
        right: 20, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.WHITE,
        padding: 10,
        borderRadius: 200,
    },
    txtZoom:{
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: colors.BLACK,
    },
});