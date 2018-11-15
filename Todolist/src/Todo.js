import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    AppRegistry,
} from 'react-native';

import TodoList from './TodoList';
import Footer from './Footer';

export default class TodoListContainer extends Component{
    constructor(props){
        super(props);
        this.state={
        todos:[
               {id:1,text:"learn react native"},
               {id:2,text:"make todo list"}
               ]
        }
    }
    
    render(){
        return(
               <View style={{flex:1}}>
                    <ScrollView style={styles.base}>
                        <TodoList                                   //todolist描画するcomponent
                            todos={this.state.todos}
                            deleteTodo={this.deleteTodo.bind(this)}
                        />
                    </ScrollView>
                    <Footer                                     //todolistにtodoを追加するcomponent
                        addTodo={this.addTodo.bind(this)}
                        id={this.state.todos.length+1}
                    />
               </View>
        );
    }
    
    deleteTodo(id) {                                            //todoを削除するモジュール
        this.setState({
                todos: this.state.todos.filter((todo) => {
                                               return todo.id !== id;
                                               })
                      });
    }
    
    addTodo(id,text){                                           //todoを追加するモジュール
        this.setState({
                      todos:this.state.todos.concat([{id:id,text:text}])
                      });
    }
}

const styles = StyleSheet.create({
                                 base: {
                                 backgroundColor: '#EEEEEE',
                                 marginTop: 20
                                 }
                                 });
