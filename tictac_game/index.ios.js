import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import GameApp from './src/gameapp.js';


AppRegistry.registerComponent('tictac_game', () => GameApp);
