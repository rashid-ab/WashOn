import React, {Component} from 'react';
import {StatusBar , View,StyleSheet,Text,Dimensions,ImageBackground,ScrollView,Image} from 'react-native';
import { connect } from 'react-redux';
import Carousel from 'react-native-looped-carousel';
const { width, height } = Dimensions.get('window');
export default class Home extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          size: { width, height },
        };
      }
    _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: {  height: 250 } });
    }
    
    render(){
        console.log(this.props.menu)
  return (
    // <View style={{flex:1}}>
        <ScrollView style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
        <Carousel
          delay={2000}
          style={this.state.size}
          autoplay
          bullets
          bullets
          bulletStyle={{margin:2,backgroundColor:'#ebebeb',width:5,height:5}}
          chosenBulletStyle={{margin:0}}
          onAnimateNextPage={(p) => console.log(p)}
        >
            <ImageBackground source={require('../images/3.jpeg')} style={[{ backgroundColor: '#BADA55',flex:1,flexDirection:"row" ,borderBottomLeftRadius: 55,borderBottomRightRadius: 0,}, this.state.size]}></ImageBackground>
            <ImageBackground source={require('../images/b.jpg')} style={[{ backgroundColor: 'red',flex:1,flexDirection:"row" ,borderRadius: 80,}, this.state.size]}></ImageBackground>
            <ImageBackground source={require('../images/4.jpg')} style={[{ backgroundColor: 'blue',flex:1,flexDirection:"row",borderRadius: 80, }, this.state.size]}></ImageBackground>
        </Carousel>
        <Text style={{alignSelf:'center',marginTop:10,fontSize:24,fontWeight:"400",color:'#fc6203'}}>Services</Text>
        <View style={{alignItems:"center",marginTop:10,}}>
              <View style={{width:'94%',flexDirection:"row",height:200,backgroundColor:'#c0ede6',borderRadius:8}}>
                    <View style={{flex:.5,justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                        <Text style={{fontSize:24}}>Wash & Fold</Text>
                        <View style={{backgroundColor:'black',marginTop:10,width:100,alignItems:"center",justifyContent:"center",height:30,borderRadius:15}}>
                            <Text style={{color:'white'}}>48 Hours</Text>
                        </View>
                    </View>
                    <View style={{flex:.5,justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                        <Image  source={require('../images/unnamed.png')} style={{width:150,height:150}} />
                    </View>
              </View>
        </View>
        <StatusBar barStyle = "white" backgroundColor = '#fc6203'/>

      </ScrollView>
        // 
    // </View>
  );
}
}


