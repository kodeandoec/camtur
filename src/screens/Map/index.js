import React from 'react'
import { 
    View, 
    Text,
    TouchableHighlight,
    Image,
    ScrollView,
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

import styles from './index.styles'
import colors from '../../utils/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ReactNativeZoomableView from '@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView';
 
const Map = ({ navigation }) => {

    const { top } = useSafeAreaInsets();

    return (
        <ScrollView 
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <TouchableHighlight
                style={{ 
                    position: 'absolute', 
                    top, 
                    left: 10, 
                    zIndex: 10,
                    backgroundColor: colors.BG,
                    borderRadius: 200,
                    padding: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                 }}
                 onPress={ () => navigation.goBack() }
            >
                <Feather name="arrow-left" size={30} color={colors.GREEN} />
            </TouchableHighlight>

            <ReactNativeZoomableView
                maxZoom={1.5}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={1}
                bindToBorders={true}
                onZoomAfter={this.logOutZoomState}
                style={{
                    padding: 10,
                    backgroundColor: 'red',
                }}
                >
                <Text>This is the content</Text>
            </ReactNativeZoomableView>
        </ScrollView>
    )
}
 
export default Map;