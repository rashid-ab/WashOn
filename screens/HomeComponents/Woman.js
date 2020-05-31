import React, {Component} from 'react';
import {TouchableOpacity,StatusBar,FlatList, RefreshControl ,StyleSheet,TextInput ,Text, View,ImageBackground,TouchableWithoutFeedback, KeyboardAvoidingView, Image} from 'react-native';
import WashComponent from '../components/WashComponent'

export default class Woman extends Component {
    constructor(props)
{
    super(props);
    this.state={
      data:[
        {id:'0',image:'../../images/unnamed.png',price:'6.00',title:'T-Shirt',quantity:0},
        {id:'1',image:'../../images/unnamed.png',price:'6.00',title:'T-Shirt',quantity:0},
        {id:'2',image:'../../images/unnamed.png',price:'6.00',title:'T-Shirt',quantity:0},
        {id:'3',image:'../../images/unnamed.png',price:'6.00',title:'T-Shirt',quantity:0},
        {id:'4',image:'../../images/unnamed.png',price:'6.00',title:'T-Shirt',quantity:0},
        {id:'5',image:'../../images/unnamed.png',price:'6.00',title:'T-Shirt',quantity:0},
        {id:'6',image:'../../images/unnamed.png',price:'6.00',title:'T-Shirt',quantity:0},
        {id:'7',image:'../../images/unnamed.png',price:'6.00',title:'T-Shirt',quantity:0},
        {id:'8',image:'../../images/unnamed.png',price:'6.00',title:'T-Shirt',quantity:0},
        {id:'9',image:'../../images/unnamed.png',price:'6.00',title:'T-Shirt',quantity:0},
        {id:'10',image:'../../images/unnamed.png',price:'6.00',title:'T-Shirt',quantity:0},
        {id:'11',image:'../../images/unnamed.png',price:'6.00',title:'T-Shirt',quantity:0},
      ]};
}
    render(){
  return (
    <View style={{flex:1}}>
      <FlatList 
          data={this.state.data}
          contentContainerStyle={{paddingRight: 20}}
          refreshControl={
            <RefreshControl 
              refreshing={this.state.isLoading}
              onRefresh={()=>this.componentDidMount()}/>
          }
          renderItem={({ item, index }) => (
            <WashComponent index={item.id} image ={item.image} price={item.price} title={item.title} quantity={item.quantity} navigation={this.props.navigation}  />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
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
