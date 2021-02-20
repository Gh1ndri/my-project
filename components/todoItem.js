import React from 'react';
import { StyleSheet, Text,TouchableOpacity, View } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function TodoItem ({item, presser}) {

    return (
            <View style={styles.item}>
                <MaterialIcons style={styles.icon} name='delete' size={20} color='#C70039'onPress={() => presser(item.key)} />
                <Text>{item.text}</Text>
            </View>
    )
}

const styles= StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#FF3333',
        borderWidth:2,
        borderStyle:'dashed', 
        borderRadius:10,
        flexDirection:'row',
    },
    icon:{
        position: 'absolute',
        marginLeft:250,
        marginTop:12,
    },
})