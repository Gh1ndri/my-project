import React , { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AddTodo ({ submitHandler}) {
    
    const [text , setText] = useState('');
    const handleChange = (val) => {
        setText(val);
    }


    const anotherFunc = () =>{
        setText('');
    }

    return(
        <View>
            <TextInput 
                value={text}
                style={styles.input}
                placeholder='new todo ..'
                onChangeText={handleChange}
                multiline
                clearTextOnFocus
            />
            <Button onPress={() => {submitHandler(text), anotherFunc()}} title='add  todo' color='#33C1F0' />
        </View>
    )
}

const styles = StyleSheet.create({
    input :{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#FF3333',
    }
})