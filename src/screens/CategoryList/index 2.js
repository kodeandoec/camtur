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
import useGetByCategory from '../../hooks/useGetByCategory';

import Feather from 'react-native-vector-icons/Feather';

import styles from './index.styles'
import colors from '../../utils/colors';

import moment from 'moment';
import 'moment/locale/es'
 
const CategoryList = ( { navigation, route }) => {

    const { top } = useSafeAreaInsets();

    const { id, name } = route.params;

    const { state, loading } = useGetByCategory(id);

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
                        numColumns={1}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={ () => (
                            <View style={{ paddingHorizontal: '3%', marginTop: 30}}>
                                {/* <Text style={styles.welcomeUp}>Baños de Agua Santa </Text> */}
                                <Text style={styles.welcomeDown}>{name}</Text>
                            </View>
                        )}
                        renderItem={({ item }) => (
                            <TouchableHighlight 
                                style={styles.viewAttraction}
                                underlayColor={colors.BG}
                                onPress={() => navigation.navigate('Commerce', { item })}
                                activeOpacity={0.8}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                    <Image
                                        source={{ uri: item.photo1 }}
                                        style={styles.image}
                                        resizeMode='cover'
                                        resizeMethod='resize'
                                    />
                                    <View style={{ flex: 1, marginLeft: 10 }}>
                                        <Text style={styles.txtName}>{item.name}</Text>
                                        <View style={{ flexDirection: 'row', marginVertical: 5}}>
                                            <Feather name="home" size={15} color={colors.BLACK} />
                                            <Text style={styles.txtDate}>{item.address}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row'}}>
                                            <Feather name="phone-call" size={15} color={colors.BLACK} />
                                            <Text style={styles.txtDate}>{item.phone}</Text>
                                        </View>
                                    </View>
                                </View>
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
 
export default CategoryList;