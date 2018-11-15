import React,{Component}from "react";
import{Text,StyleSheet,ListView,View}from "react-native"

import CheckBox from 'react-native-check-box'

export default class TodoList extends Component{
  constructor(props){
    super(props);
    this.state={
      isChecked:false
    }
    this.dataSource=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
  }
    
  render(){
    return(
      <View>
      <ListView
        dataSource={this.dataSource.cloneWithRows(this.props.todos)}
        renderRow={this.renderItem.bind(this)}
      />
      </View>
    );
  }

    
  renderItem(todos){                            //todolistの中身
    return(
      <View style={styles.todo}>
        <CheckBox
          isChecked={this.props.complete}
          onClick={()=>this.onClick()}
        />
        <Text style={styles.text}>
          {todos.text}
        </Text>
        <Text
          style={styles.delete}
          onPress={()=>this.props.deleteTodo(todos.id)}
        >
          削除
        </Text>
      </View>
    );
  }

  onClick(){
      this.setState({
                    isChecked: !this.state.isChecked
                    });
  }
}

TodoList.propTypes={
  todos:React.PropTypes.array.isRequired,
  deleteTodo:React.PropTypes.func.isRequired
}

const styles=StyleSheet.create({
  todo: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },
  text: {
    flex:6,
    marginLeft: 10
  },
  delete:{
    color: 'blue',
    flex:1,
    marginLeft:10
  }
});
