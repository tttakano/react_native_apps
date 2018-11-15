import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';


export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render(){
    return(
      <View style={styles.base}>
        <TextInput
          style={styles.input}
          placeholder="Todoを追加できます"
          value={this.state.text}
          onChangeText={(text)=>this.setState({text})}
        />
        <Text
          style={styles.text}
          onPress={()=>this.onAddPress()}
        >
          追加
        </Text>
      </View>
    );
  }
  onAddPress(){                                         //追加ボタンが押された際に親componemtに値を渡す
    this.props.addTodo(this.props.id,this.state.text);
    this.setState({
      text:""
    });
  }
}

Footer.propTypes={
  addTodo:React.PropTypes.func.isRequired,
  id:React.PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  base: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 8,
    padding: 10,
    borderTopColor: '#E1E8ED',
    borderTopWidth: 1
  },
  text: {
    flex: 1,
    padding: 10,
    fontSize: 15,
    color: '#0076ff'
  }
});
