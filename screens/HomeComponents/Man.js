import React, {Component} from 'react';
import {TouchableOpacity,StatusBar ,StyleSheet,Keyboard,SafeAreaView ,TextInput ,Text, View,ImageBackground,TouchableWithoutFeedback, KeyboardAvoidingView, Image} from 'react-native';



export default class Home extends Component {
    constructor(props)
{
    super(props);
    this.state={
        email:'',
        pass: '',
    };
}
    render(){
  return (
    <View style={{flex:1}}>
        <StatusBar barStyle = "white" backgroundColor = '#fc6203'/>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
