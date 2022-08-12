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
import useCategories from '../../../hooks/useCategories';

import styles from './index.styles'
import colors from '../../../utils/colors';
 
const Categories = ( { navigation }) => {

    const { top } = useSafeAreaInsets();

    const { state, loading } = useCategories();


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
                        //     <View style={{marginTop: 30}}>
                        //         <Text style={styles.welcomeUp}>Nuestras</Text>
                        //         <Text style={styles.welcomeDown}>Categorías</Text>
                        //     </View>
                        // )}
                        renderItem={({ item }) => (
                            <TouchableHighlight 
                                style={styles.viewAttraction}
                                underlayColor={colors.BLACK}
                                onPress={() => navigation.navigate('CategoryListEn', { id: item.id, name: item.category_en })}
                                activeOpacity={0.8}
                            >
                                <>
                                    <Image
                                        source={{ uri: item.photoUrl }}
                                        style={styles.image}
                                        resizeMode='cover'
                                        resizeMethod='resize'
                                    />
                                    <View style={styles.ctnInfo}>
                                        <Text style={styles.txtName}>{item.category_en}</Text>
                                    </View>
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
 
export default Categories;