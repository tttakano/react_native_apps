import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    TextInput,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Hoshi } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

/*最初に遷移する画面
 おすすめを押すことで、cookpadの今日のpickupからランダムに一品選ばれる。
 検索した場合は、検索結果の中から一品ランダムで選ばれる。
 */

export default class init extends Component{
    constructor(props){
        super(props);
        this.state = {
            product:"",
            purpose:"",
        };
    }
    render(){
        return(
            <View style={styles.continar}>
               <Image
                source={require('../img/cookpad.png')}
                style={styles.image}
               />
               <View style={{marginHorizontal:50}}>
                <TouchableOpacity onPress={()=>Actions.recommend()}>
                    <Text style={styles.linkText}>
                        <Icon name="thumb-up-outline" size={30} color="#ff8c00" />今日のおすすめ
                    </Text>
                </TouchableOpacity>
                <View style={styles.input}>
                    <Hoshi
                        label={'料理・食材'}
                        borderColor={'#b76c94'}
                        maskColor={'#F9F7F6'}
                        onChangeText={(text) => this.setState({product:text})}
                    />
                    <Hoshi
                        label={'用途'}
                        maskColor={'#F9F7F6'}
                        borderColor={'#7ac1ba'}
                        onChangeText={(text) => this.setState({purpose:text})}
                    />
                </View>
                <TouchableOpacity onPress={()=>Actions.explore(this.state)}>
                    <Text style={[styles.linkText,{padding:50}]}>
                        <Icon name="silverware" size={30} color="#ff8c00" />料理検索
                    </Text>
                </TouchableOpacity>
               </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
                                 continar: {
                                 paddingVertical:80,
                                 flex: 1,
                                 flexDirection: 'column',
                                 justifyContent: 'space-between',
                                 backgroundColor: '#F9F7F6'
                                 },
                                 image:{
                                 paddingTop:100,
                                 width: 400, height: 110,
                                 },
                                 linkText: {
                                 fontSize: 30,
                                 color: '#696969',
                                 marginHorizontal:30
                                 },
                                 input: {
                                 paddingVertical: 50,
                                 },
                                 });
