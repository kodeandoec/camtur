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
import useNews from '../../hooks/useNews';

import Feather from 'react-native-vector-icons/Feather';

import styles from './index.styles'
import colors from '../../utils/colors';

import moment from 'moment';
import 'moment/locale/es'
 
const News = ( { navigation }) => {

    const { top } = useSafeAreaInsets();

    const { state, loading } = useNews();

    const changeDate = (d) => {
        const myDate = moment(d).format('LL');
        return myDate
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
                        numColumns={1}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={ () => (
                            <View>
                                <TouchableHighlight
                                    style={{ 
                                        alignSelf: 'flex-start',
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

                                <Text style={styles.welcomeUp}>Noticias</Text>
                                <Text style={styles.welcomeDown}>Importantes</Text>
                            </View>
                        )}
                        renderItem={({ item }) => (
                            <TouchableHighlight 
                                style={styles.viewAttraction}
                                underlayColor={colors.BG}
                                onPress={() => navigation.navigate('NewInfo', { item })}
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
                                        <Text style={styles.txtName}>{item.title_es}</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', top: -5}}>
                                            <Feather name="calendar" size={14} color={colors.BLACK} />
                                            <Text style={styles.txtDate}>{changeDate(item.date)}</Text>
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
 
export default News;