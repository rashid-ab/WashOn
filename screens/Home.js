import React, {Component} from 'react';
import {StatusBar , View} from 'react-native';
import { connect } from 'react-redux';

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
        console.log(this.props.menu)
  return (
    <View style={{flex:1}}>
        <StatusBar barStyle = "white" backgroundColor = '#fc6203'/>
    </View>
  );
}
}


