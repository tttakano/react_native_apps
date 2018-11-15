import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

export default class Cell extends Component {
  cellStyle() {
    if(this.props.winstate){
      return styles.cellwin;
    }
    switch (this.props.player) {
      case 1:
        return styles.cellX;
      case 2:
        return styles.cellO;
      default:
        return null;
    }
  }

  textStyle() {
    switch (this.props.player) {
      case 1:
        return styles.cellTextX;
      case 2:
        return styles.cellTextO;
      default:
        return {};
    }
  }

  textContents() {
    switch (this.props.player) {
      case 1:
        return 'X';
      case 2:
        return 'O';
      default:
        return '';
    }
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor="transparent"
        activeOpacity={0.5}>
        <View style={[styles.cell, this.cellStyle()]}>
          <Text style={[styles.cellText, this.textStyle()]}>
            {this.textContents()}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
};

var styles = StyleSheet.create({
  cell: {
    width: 80,
    height: 80,
    borderRadius: 5,
    backgroundColor: '#fff791',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellwin: {
    backgroundColor: '#ffddc0',
  },
  cellX: {
    backgroundColor: '#d8ff91',
  },
  cellO: {
    backgroundColor: '#c7ffe9',
  },
  cellText: {
    borderRadius: 5,
    fontSize: 50,
    fontFamily: 'AvenirNext-Bold',
  },
  cellTextX: {
    color: '#83ff6d',
  },
  cellTextO: {
    color: '#98ddff',
  },
});
