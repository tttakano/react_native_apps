import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Button,
  Alert,
} from 'react-native';

import Cell from "./Cell.js"
import Judge from "./Judge.js"

export default class TicTacToeApp extends Component {
  constructor(props){
      super(props);
      const board = this.resetBoard();

      this.state={
        history:[{
          board:board,
        }],
        winord:5,
        winspe:5,
        player:1,
      }
  }

  nextPlayer(){
    return this.state.player==1?2:1
  }

  hasMark(row, col){
    return this.state.history[this.state.history.length-1].board[row][col]!==0;
  }

  setBoard(row,col){
    const history = this.state.history;
    const current = history[history.length-1];
    const board=this.resetBoard();

    //call by value
    for (var i = 0; i < 3; i++){
      for(var j = 0; j < 3; j++){
        board[i][j]=current.board[i][j];
      }
    }
    board[row][col]=this.state.player;
    return board;
  }

  handleCellPress(row, col) {
    if(this.hasMark(row,col)){
      return;
    }

    const history = this.state.history;
    const boa=this.setBoard(row,col);

    this.setState({
      history: history.concat([{
        board:boa,
      }]),
      player:this.nextPlayer(),
    });
  }

  restartGame() {
    const board=this.resetBoard();

    this.setState({
      history:[{
        board:board,
      }],
      winord:5,
      winspe:5,
      player:1,
    });
  }

  winstate(ord,spe){
    if(this.state.winspe==5){
      this.setState({
        winord:ord,
        winspe:spe,
      });
    }
  }

  getwinboard(){
    const winboard=this.resetBoard();
    const ord=this.state.winord;
    switch (this.state.winspe) {
      case 0:
        winboard[ord][0]=winboard[ord][1]=winboard[ord][2]=1;
        break;
      case 1:
        winboard[0][ord]=winboard[1][ord]=winboard[2][ord]=1;
        break;
      case 2:
        winboard[0][0]=winboard[1][1]=winboard[2][2]=1;
        break;
      case 3:
        winboard[0][2]=winboard[1][1]=winboard[2][0]=1;
        break;
    }
    return winboard;
  }

  resetBoard(){
    var size = 3;
    var board = Array(size);
    for (var i = 0; i < size; i++) {
      var row = Array(size);
      for (var j = 0; j < size; j++) {
        row[j] = 0;
      }
      board[i] = row;
    }
    return board;
  }

  moveback(){
    this.setState({
      history:this.state.history.slice(0,-1),
      player:this.nextPlayer(),
    });
  }

  render() {
    const history = this.state.history;
    const current = history[history.length-1];
    const label=(history.length-1)?
      <Text
        style={styles.title}
        onPress={() => {this.moveback()}}
      >
        Undo
      </Text>:
      <Text style={styles.title}>Start</Text>

    let winboard;
    if(this.state.winspe!==5){
      winboard=this.getwinboard();
    }else{
      winboard=this.resetBoard();
    }

    var rows = current.board.map((cells, row) =>
      <View key={'row' + row} style={styles.row}>
        {cells.map((player, col) =>
          <Cell
            key={'cell' + col}
            player={player}
            onPress={this.handleCellPress.bind(this, row, col)}
            winstate={winboard[row][col]}
          />
        )}
      </View>
    );

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tic Tac Toe</Text>
        <View style={styles.board}>
          {rows}
        </View>
        <Judge
          board={current.board}
          onRestart={this.restartGame.bind(this)}
          winstate={this.winstate.bind(this)}
        />
        {label}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffacd'
  },
  title: {
    fontFamily: 'Georgia',
    fontSize: 39,
    marginBottom: 20,
    color: '#ffbf80'
  },
  board: {
    padding: 5,
    backgroundColor: '#fffacd',
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
  },
});
