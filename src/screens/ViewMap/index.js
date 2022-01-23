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

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
 
const ViewMap = ({ navigation }) => {

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

            <TransformWrapper>
                <TransformComponent>
                    <Image
                        src="image.jpg"
                        style={{
                            width: '100%',
                            height: 300,
                        }}
                    />
                </TransformComponent>
            </TransformWrapper>
        </ScrollView>
    )
}
 
export default ViewMap;