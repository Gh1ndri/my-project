import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import {Alert, FlatList, StyleSheet, Text, View,TouchableWithoutFeedback,Keyboard } from 'react-native';
import AddTodo from './components/addTodo';
import Header from './components/header';
import TodoItem from './components/todoItem';

export default function App() {

  const [todos,setTodos] = useState([
    {text:'Bonjour', key:'1'},
  ]);


  const presser = (key) => {
    setTodos((prevTodos) =>{
      return prevTodos.filter(todo => todo.key != key);
    });
  }


  const submitHandler = (text) => {
    var vide=false;
    for (let i = 0; i < text.length ; i++){
      if(text.charAt(i)!=' '){
        vide=true;
      }
    }
    if(vide==true){
      setTodos((prevTodos) =>{
        return [
          {text: text, key: Math.random().toString() },
          ...prevTodos
        ];
      })
    }else{
      Alert.alert('ooops!','vous devez ecrire quelque chose',[
        {text:'comprit',onPress:()=>console.log('closed')}
      ]);
    }
  }

  
  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
      <View style={styles.container}>
        <Header />
        <View style={styles.contant}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} presser={presser} />
              )} 
            /> 
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
  },
  contant:{
    padding:40,
    flex:1,
  },
  list:{
    flex:1,
    marginTop:20,
  }
});
