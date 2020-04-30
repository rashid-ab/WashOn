import React, {Component} from 'react';
import {TouchableOpacity ,StyleSheet,Modal  ,Text, View,} from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import {MENU} from '../../actions/actionTypes';
export default class Menue extends Component {
    constructor(props){
        super(props);
        this.state={
          visible:false,
        }
        this.visibility=this.visibility.bind(this)
    }
    visibility = () =>{
        if(this.state.visible==false){
            this.setState({visible:true})
        }
        if(this.state.visible==true){
            this.setState({visible:false})
        }
    }
    handlefunction= (text=null) =>{
        switch(text){
          case 'Home':
            this.props.navigation.navigate('Home')
            this.setState({visible:false})
            break;
          case 'Notification':
            this.props.navigation.navigate('Notification')
            this.setState({visible:false})
            break;
          case 'Aboutus':
            this.props.navigation.navigate('Aboutus')
            this.setState({visible:false})
            break;
          case 'Earn':
            this.props.navigation.navigate('Earn')
            this.setState({visible:false})
            break;
          case 'Orders':
            this.props.navigation.navigate('Orders')
            this.setState({visible:false})
            break;
          case 'Settings':
            this.props.navigation.navigate('Settings')
            this.setState({visible:false})
            break;
        }
    }
    
    render() {
      console.log(this.props)
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Modal
          animationType=""
          transparent={true}
          visible={this.state.visible}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                  <View style={{flexDirection:'row',paddingTop:25,justifyContent:'space-between',paddingHorizontal:20}}>
                      <View style={{flexDirection:"column",alignItems:'center'}}>
                          <TouchableOpacity onPress={()=>{this.handlefunction('Home')}} style={{backgroundColor:this.props.navigation.state.routeName=='Home'?'#fc6203':'white',borderRadius:50,width:80,height:80,justifyContent:"center"}}>
                            <Icon name="home" type="entypo" size={40}  color={this.props.navigation.state.routeName=='Home'?'white':'#fc6203'} />
                          </TouchableOpacity>
                          <Text style={{marginTop:10,fontSize:18,textAlign:'center',color:'white'}}>Home</Text>
                      </View>
                      <View style={{flexDirection:"column",alignItems:'center'}}>
                          <TouchableOpacity onPress={()=>{this.handlefunction('Notification')}} style={{backgroundColor:this.props.navigation.state.routeName=='Notification'?'#fc6203':'white',borderRadius:50,width:80,height:80,justifyContent:"center"}}>
                              <Icon name="bell" type="octicon" size={40}  color={this.props.navigation.state.routeName=='Notification'?'white':'#fc6203'} />
                          </TouchableOpacity>
                          <Text style={{marginTop:10,fontSize:18,textAlign:'center',color:'white'}}>Notification</Text>
                      </View>
                      <View style={{flexDirection:"column",alignItems:'center'}}>
                          <TouchableOpacity onPress={()=>{this.handlefunction('Aboutus')}} style={{backgroundColor:this.props.navigation.state.routeName=='Aboutus'?'#fc6203':'white',borderRadius:50,width:80,height:80,justifyContent:"center"}}>
                              <Icon name="home" type="entypo" size={40}  color={this.props.navigation.state.routeName=='Aboutus'?'white':'#fc6203'} />
                          </TouchableOpacity>
                          <Text style={{marginTop:10,fontSize:18,textAlign:'center',color:'white'}}>About us</Text>
                      </View>
                  </View>
                  <View style={{flexDirection:'row',paddingTop:25,justifyContent:'space-between',paddingHorizontal:20}}>
                      <View style={{flexDirection:"column",alignItems:'center'}}>
                          <TouchableOpacity onPress={()=>{this.handlefunction('Orders')}} style={{backgroundColor:this.props.navigation.state.routeName=='Orders'?'#fc6203':'white',borderRadius:50,width:80,height:80,justifyContent:"center"}}>
                              <Icon name="menu" type="entypo" size={40}  color={this.props.navigation.state.routeName=='Orders'?'white':'#fc6203'} />
                          </TouchableOpacity>
                          <Text style={{marginTop:10,fontSize:18,textAlign:'center',color:'white'}}>All Orders</Text>
                      </View>
                      <View style={{flexDirection:"column",alignItems:'center'}}>
                          <TouchableOpacity onPress={()=>{this.handlefunction('Earn')}} style={{backgroundColor:this.props.navigation.state.routeName=='Earn'?'#fc6203':'white',borderRadius:50,width:80,height:80,justifyContent:"center"}}>
                              <Icon name="share" type="entypo" size={40}  color={this.props.navigation.state.routeName=='Earn'?'white':'#fc6203'} />
                          </TouchableOpacity>
                          <Text style={{marginTop:10,fontSize:18,textAlign:'center',color:'white'}}>Refer & Earn</Text>
                      </View>
                      <View style={{flexDirection:"column",alignItems:'center'}}>
                          <TouchableOpacity onPress={()=>{this.handlefunction('Settings')}} style={{backgroundColor:this.props.navigation.state.routeName=='Settings'?'#fc6203':'white',borderRadius:50,width:80,height:80,justifyContent:"center"}}>
                              <Icon name="settings" type="material-community" size={40}  color={this.props.navigation.state.routeName=='Settings'?'white':'#fc6203'} />
                          </TouchableOpacity>
                          <Text style={{marginTop:10,fontSize:18,textAlign:'center',color:'white'}}>Settings</Text>
                      </View>
                  </View>
                  <TouchableOpacity onPress={()=>this.setState({visible:false})} style={{width:40,height:20,alignSelf:"center",marginTop:10}}>
                      <Icon name="chevron-up" type="entypo" size={40}  color={'white'} />
                  </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <TouchableOpacity style={{marginLeft:10}} onPress={() =>this.visibility()}>
              <Icon name="menu" type="entypo" size={30}  color={'white'} />
          </TouchableOpacity>
    </View>
      );
    }
  }
  const styles = StyleSheet.create({
    centeredView: {
      height:320,      
      backgroundColor: 'rgba(52, 52, 52, 0.4)',
      marginTop: 56,
      // borderRadius:10
    },
    modalView: {
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
  