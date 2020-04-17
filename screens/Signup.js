import React, {Component} from 'react';
import {TouchableOpacity ,StyleSheet,Keyboard,SafeAreaView ,TextInput ,Text, View,ImageBackground,TouchableWithoutFeedback, KeyboardAvoidingView, Image} from 'react-native';



export default class Signup extends Component {
    constructor(props)
{
    super(props);
    this.state={
        email: 'opencloudsys@gmail.com',
        pass: 'Miami123',
    };
}
    render(){
  return (
    <View style={{flex:1}}>
        <ImageBackground source={require('../images/background.png')} style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex:1}} accessible={false}>
                    <SafeAreaView style={{flex:1}}>
                        <View style={{flex:.1}}>
                        </View>
                        <View style={{flex:.2,alignItems:"center"}}>
                            <Image source={require('../images/1.png')} style={{width:150,height:150}} />
                        </View>
                        <View style={{flex:.8,alignItems:"center",justifyContent:"center"}}>
                            <View style={{width:'90%',height:400,borderRadius:10,borderColor:'black',backgroundColor:'white',shadowColor:'#000',shadowOffset: {width: 0,height: 2},shadowOpacity: 0.8,shadowRadius: 0.0001,elevation:5,}}>
                                <View style={{flex:.2,alignItems:'center',paddingTop:10}}>
                                    <Text style={{width:"87%",fontSize:20,fontWeight:"bold",color:'#656665'}}>User Name</Text>
                                    <TextInput placeholder="User Name"  style={{width:'87%',paddingTop:10,fontSize:18,borderBottomColor:'#e1e6e2',borderBottomWidth:.5}}/>
                                </View>
                                <View style={{flex:.2,alignItems:'center',paddingTop:10}}>
                                    <Text style={{width:"87%",fontSize:20,fontWeight:"bold",color:'#656665'}}>Phone Number</Text>
                                    <TextInput placeholder="Phone Number"  style={{width:'87%',paddingTop:10,fontSize:18,borderBottomColor:'#e1e6e2',borderBottomWidth:.5}}/>
                                </View>
                                <View style={{flex:.2,alignItems:'center',paddingTop:10}}>
                                    <Text style={{width:"87%",fontSize:20,fontWeight:"bold",color:'#656665'}}>Email id</Text>
                                    <TextInput placeholder="Email"  style={{width:'87%',paddingTop:10,fontSize:18,borderBottomColor:'#e1e6e2',borderBottomWidth:.5}}/>
                                </View>
                                <View style={{flex:.2,alignItems:'center',paddingTop:10}}>
                                    <Text style={{width:"87%",fontSize:20,fontWeight:"bold",color:'#656665'}}>Password</Text>
                                    <TextInput placeholder="Password" name="password" refs="email" secureTextEntry  style={{width:'87%',paddingTop:10,fontSize:18,borderBottomColor:'#e1e6e2',borderBottomWidth:.5}}/>
                                </View>
                                <TouchableOpacity  onPress={()=>{alert('asd')}} style={{flex:.1,alignSelf:'center',width:100,height:100,position:'absolute',top:350}}>
                                    <Image source={require('../images/Login.png')} style={{width:100,height:100,}} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flex:.1,alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
                                <Text style={{fontSize:18,color:'#656665'}}>Already have an account?</Text>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('signin')}}>
                                    <Text style={{fontSize:18,color:'#656665',fontWeight:"bold"}}> Login</Text>
                                </TouchableOpacity>
                        </View>
                    </SafeAreaView>
            </TouchableWithoutFeedback>
        </ImageBackground>
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
