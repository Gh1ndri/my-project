import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>my todo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
 header :{
     height:70,
     paddingTop:35,
     backgroundColor:"#33C1FF",
     marginTop:28,
     borderRadius:20,
 },
 title:{
     textAlign:"center",
     color:'#FFFFFF',
     fontWeight:'bold',
     fontSize:20
 }
})
