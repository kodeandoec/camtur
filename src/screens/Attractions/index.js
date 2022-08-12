import React from 'react'
import { 
    View, 
    Text,
    TouchableHighlight,
    ActivityIndicator,
    FlatList,
    Image
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useAtractions from '../../hooks/useAtractions';

import styles from './index.styles'
import colors from '../../utils/colors';
 
const Attractions = ( { navigation }) => {

    const { top } = useSafeAreaInsets();

    const { state, loading } = useAtractions();

    const onlyText = ( text ) => {
        const regex = /<[^>]*>/mgi
        const text_without_tags = text.replace(regex, "")
        return text_without_tags;
    }

    return (
        <>
            { loading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color={colors.GREEN} />
                </View>
            ) 
            : (
                <View style={[styles.container, { paddingTop: top }]}>
                    
                    <FlatList
                        data={state}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        // ListHeaderComponent={ () => (
                        //     <View>
                        //         <Text style={styles.welcomeUp}>Atractivos turísticos en</Text>
                        //         <Text style={styles.welcomeDown}>Baños Ecuador</Text>
                        //     </View>
                        // )}
                        renderItem={({ item }) => (
                            <TouchableHighlight 
                                style={styles.viewAttraction}
                                underlayColor={colors.BLACK}
                                onPress={() => navigation.navigate('AtractionInfo', { item })}
                                activeOpacity={0.8}
                            >
                                <>
                                    <View style={styles.ctnInfo}>
                                        <Text style={styles.txtName}>{item.name}</Text>
                                        {/* <Text style={styles.txtDescription} numberOfLines={2}>{onlyText(item.description_es)}</Text> */}
                                    </View>
                                    <Image
                                        source={{ uri: item.photo1 }}
                                        style={styles.image}
                                        resizeMode='cover'
                                        resizeMethod='resize'
                                    />
                                </>
                            </TouchableHighlight>
                        )}
                        ListFooterComponent={ () => (
                            <View style={{ height: 100 }} />
                        )}
                    />



                </View>
            )}
        </>
    )
}
 
export default Attractions;