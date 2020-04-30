import React, {Component} from 'react';
import {TouchableOpacity,StatusBar ,StyleSheet,Keyboard,SafeAreaView ,TextInput ,Text, View,ImageBackground,TouchableWithoutFeedback, KeyboardAvoidingView, Image} from 'react-native';
import { Icon } from "react-native-elements";


export default class WashComponent extends Component {
    constructor(props)
{
    super(props);
    this.state={
        quantityTotal:this.props.quantity
    };
}
qauntities = (text) => {
  console.log(this.state.quantityTotal)
        if(text=='Plus'){
         return this.setState({quantityTotal:this.state.quantityTotal+1})
        }
        if(text=='Minus'){
          if(this.state.quantityTotal>0){
           return this.setState({quantityTotal:this.state.quantityTotal-1})
          }
          
        }
}
    render(){
  return (
    <View style={{height:90,justifyContent:"center",backgroundColor:'white',marginTop:5}}>
          <View style={{flexDirection:"row"}}>
              <View style={{flex:.5}}>
                  <View style={{flexDirection:'row'}}>
                    <View style={{paddingLeft:10}}><Image source={require('../../images/1.png')} style={{width:70,height:70}} /></View>
                      <View style={{marginLeft:10}}>
                        <View style={{marginTop:10}}><Text style={{fontSize:22,fontWeight:"bold"}}>{this.props.title}</Text></View>
                        <View style={{flexDirection:"row",marginTop:5}}><Text style={{fontSize:15,color:'#fc6203'}}>{this.state.quantityTotal} </Text><Text style={{fontSize:15,color:'#fc6203'}}>X </Text><Text style={{fontSize:15,color:'#fc6203'}}>${this.props.price}</Text></View>
                      </View>
                  </View>
              </View>
              <View style={{flex:.5,justifyContent:"center"}}>
                  <View style={{flexDirection:'row',justifyContent:"flex-end",paddingRight:20}}>
                    <View style={{flexDirection:"row",marginTop:5}}>
                      <TouchableOpacity onPress={()=>this.qauntities('Minus')}>
                        <Icon type="antdesign" name="minuscircleo" size={22} />
                      </TouchableOpacity>
                      <View style={{width:40,alignItems:"center"}}>
                        <Text style={{fontSize:18}}>{this.state.quantityTotal}</Text>
                      </View>
                      <TouchableOpacity onPress={()=>this.qauntities('Plus')}>
                        <Icon type="antdesign" name="pluscircleo" size={22} />
                      </TouchableOpacity>
                    </View>
                      
                  </View>
              </View>
          </View>
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
