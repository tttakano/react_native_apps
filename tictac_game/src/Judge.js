import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

export default class Judge extends Component {

  winner() {
    const board = this.props.board;
    for (var i = 0; i < 3; i++) {
      if (board[i][0] !== 0 && board[i][0] === board[i][1] &&
          board[i][0] === board[i][2]) {
          this.props.winstate(i,0);
        return board[i][0];
      }
    }

    for (var i = 0; i < 3; i++) {
      if (board[0][i] !== 0 && board[0][i] === board[1][i] &&
          board[0][i] === board[2][i]) {
          this.props.winstate(i,1);
        return board[0][i];
      }
    }

    if (board[0][0] !== 0 && board[0][0] === board[1][1] &&
        board[0][0] === board[2][2]) {
        this.props.winstate(3,2);
      return board[0][0];
    }

    if (board[0][2] !== 0 && board[0][2] === board[1][1] &&
        board[0][2] === board[2][0]) {
        this.props.winstate(3,3);
      return board[0][2];
    }

    return null;
  }

  tie(){
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if (this.props.board[i][j] === 0) {
          return false;
        }
      }
    }
    return this.winner() === null;
  }

  render() {
    var board = this.props.board;
    var tie = this.tie();
    var winner = this.winner();
    if (!winner && !tie) {
      return <View />;
    }

    var message;
    if (tie) {
      message = 'It\'s a tie!';
    } else {
      message = (winner === 1 ? 'X' : 'O') + ' wins!';
    }

    return (
      <View style={styles.overlay}>
        <Text style={styles.overlayMessage}>{message}</Text>
        <TouchableHighlight
          onPress={this.props.onRestart}
          underlayColor="transparent"
          activeOpacity={0.5}>
          <View style={styles.newGame}>
            <Text style={styles.newGameText}>New Game</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(221, 221, 221, 0.5)',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayMessage: {
    fontSize: 40,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    fontFamily: 'AvenirNext-DemiBold',
    textAlign: 'center',
  },
  newGame: {
    backgroundColor: '#887765',
    padding: 20,
    borderRadius: 5,
  },
  newGameText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'AvenirNext-DemiBold',
  },
});
