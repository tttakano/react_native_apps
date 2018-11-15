import React from 'react';
import {
    Text,
    View,
    AppRegistry,
} from 'react-native';

import { Router, Scene, Modal, Actions } from 'react-native-router-flux';

import init from './init'
import recommend from './recommend'
import explore from './explore'


//router_fluxを管理するcomponent
class container extends React.Component {
    render () {
        return(
               <Router>
                <Scene key="root">
                    <Scene key="init" initial component={init} title="cookpad" />
                    <Scene key="recommend" component={recommend} title="今日のおすすめ" />
                    <Scene key="explore" component={explore} title="料理検索" />
                </Scene>
               </Router>
        )
    }
}

export default container;
