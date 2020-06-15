import React, {Component} from 'react';
import {TouchableOpacity,StatusBar,ScrollView ,StyleSheet,Keyboard,SafeAreaView ,TextInput ,Text, View,ImageBackground,TouchableWithoutFeedback, KeyboardAvoidingView, Image} from 'react-native';
import { Icon } from "react-native-elements";
import { connect } from 'react-redux';
import {ORDER} from '../../actions/actionTypes'
import DropDownItem from "react-native-drop-down-item";
import {  } from 'react-native-gesture-handler';

 class WashComponent extends Component {
    constructor(props)
{
    super(props);
    this.state={
        itemstate:false
    };
}

onPress = () => {
    if(this.state.itemstate==true){
        this.setState({itemstate:false})
    }
    else{
        this.setState({itemstate:true})
    }
}

render(){
  return (
    <ScrollView style={{flex:1}}>
        
                <View style={{flex:1,alignItems:"flex-start"}}>
                    <View style={{height:60,flexDirection:"row",flex:1,paddingHorizontal:20,borderBottomColor:'#b0aeae',borderBottomWidth:1}}>
                        <View style={{flexDirection:'row',alignItems:"center",flex:1}}>
                            <View style={{flex:.5}}>
                                <Text style={{fontSize:20,fontWeight:"700",color:'#595757'}}>{this.props.Heading}</Text>
                            </View>
                            <View style={{flex:.5,justifyContent:"flex-end",flexDirection:'row'}}>
                                <TouchableOpacity style={{flex:.2}}>
                                    <Icon type="font-awesome" name="pencil" color='#595757' size={22} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{flex:.2}}>
                                    <Icon type="ionicon" name="md-trash" color='#595757' size={22} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:'column',paddingVertical:20,}}>
                        {
                            this.props.data.map((item,index)=>{
                                return(
                                <View>
                                <TouchableOpacity style={{flexDirection:'row',paddingLeft:20,marginBottom:20}} onPress={()=>this.onPress(index)}>
                                    <View style={{width:30}}>
                                        {this.state.itemstate==false?
                                        <Icon type="antdesign" name="pluscircleo" color='#7d7a7a' size={20} style={{marginTop:5,width:30}} />
                                        :
                                        <Icon type="antdesign" name="minuscircleo" color='#7d7a7a' size={20} style={{marginTop:5,width:30}} />
                                        }
                                    </View>
                                    <Text style={{fontSize:20,marginLeft:10,color:'#7d7a7a'}}>{item.Category}</Text>
                                </TouchableOpacity>
                                
                                </View>
                                )
                            })
                        }
                    </View>
                </View>
        
      </ScrollView>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
const mapStateToProps = state => ({
  order: state.order,
  // connected: state.Connected
})
const mapDispatchToProps =dispatch => {
  return { 
      setOrder: (token) => {dispatch({type: ORDER, payload:token})},
     
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(WashComponent)