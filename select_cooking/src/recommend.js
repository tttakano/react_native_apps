import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    WebView,
} from 'react-native';

import { Actions,} from 'react-native-router-flux';
import Animation from 'lottie-react-native';
import anim from '../img/cooking_app.json';

export default class recommend extends Component{
    constructor(props){
        super(props);
        this.state={
            html:'',url:""
        }
    }
    
    //urlがloadできていればwebページ,できていなければload画面を表示
    render() {
        return (
                (this.state.url) ?
                    <WebView
                        source={{uri:this.state.url}}
                        style={{marginTop: 20}}
                    />
                :
                    <View style={styles.container}>
                        <Text style={styles.load}>now loading...</Text>
                        <View>
                            <Animation
                                ref={animation => {
                                    this.animation = animation;
                                }}
                                style={{
                                    width: 550,
                                    height: 400
                                }}
                                loop={true}
                                source={anim}
                            />
                        </View>
                    </View>
        );
    }
    
    //urlからHTMLを取得、正規表現を使って必要なものを取り出し、本日のpickupからランダムなurlを返す関数
    geturl(){
        var myRE=/\/recipe\/\d+/g;
        fetch('https://cookpad.com/pickup_recipes')
            .then(res => res.text())
            .then(text=> text.match(myRE))
            .then(match => this.setState({html:match}))
            .then(()=>{
              var id=this.getid();
              var url="https://cookpad.com"+this.state.html[id];
              this.setState({url:url});
            });
    }
    
    //ランダムなIDを取得
    getid(){
        var id = Math.floor( Math.random() * this.state.html.length);
        return id;
    }
    
    //urlをload
    componentWillMount(){
        this.geturl();
    }
}

const styles = StyleSheet.create({
                                 container: {
                                 flex: 1,
                                 justifyContent: 'center',
                                 alignItems: 'center',
                                 backgroundColor: '#F9F7F6'
                                 },
                                 load: {
                                 fontSize: 50,
                                 textAlign: 'center',
                                 margin: 10,
                                 color: 'black'
                                 }
                                 });
