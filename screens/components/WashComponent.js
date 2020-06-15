import React, {Component} from 'react';
import {TouchableOpacity,StatusBar ,StyleSheet,Keyboard,SafeAreaView ,TextInput ,Text, View,ImageBackground,TouchableWithoutFeedback, KeyboardAvoidingView, Image} from 'react-native';
import { Icon } from "react-native-elements";
import { connect } from 'react-redux';
import {ORDER} from '../../actions/actionTypes'

 class WashComponent extends Component {
    constructor(props)
{
    super(props);
    this.state={
      Data:
        {title:'',rate:'',price:'',quantity:0},
      
      price:'',
      quantity:this.props.quantity,
      check:true,
      
    };
}
AddData = (check,index,orderData) =>{
  // console.log(this.state.check)
  if(check == true)
  {
    orderData[index].price=this.props.price*(this.state.quantity+1)
    orderData[index].quantity=this.state.quantity+1
    orderData[index].title=this.props.title
    orderData[index].rate=this.props.price
    this.props.setOrder(orderData)
    console.log(orderData)
    return;
  }
  else
  {
    const orderDetail=this.state.Data;
    orderDetail.price=this.props.price*(this.state.quantity+1)
    orderDetail.quantity=1
    orderDetail.title=this.props.title
    orderDetail.rate=this.props.price
    orderData.push(orderDetail)
    this.props.setOrder(orderData)
    return
  }
}
MinusData = (check,index,orderData) =>{
  // console.log(this.state.check)
  if(check == true)
  {
    orderData[index].price=this.props.price*(this.state.quantity-1)
    orderData[index].quantity=this.state.quantity-1
    orderData[index].title=this.props.title
    orderData[index].rate=this.props.price
    this.props.setOrder(orderData)
    console.log(orderData)
    return;
  }
  else
  {
    const orderDetail=this.state.Data;
    orderDetail.price=this.props.price*(this.state.quantity-1)
    orderDetail.quantity=1
    orderDetail.title=this.props.title
    orderDetail.rate=this.props.price
    orderData.push(orderDetail)
    this.props.setOrder(orderData)
    return
  }
}
qauntities = (text) => {
  return this.props.navigation.navigate('Bag');
        if(text=='Plus'){
          // console.log(this.props.order)
            if(this.props.order.length>0){
              const quantityarray=this.state.Data;
              const orderData=this.props.order
              let check=false
              for(let j=0; j<orderData.length; j++){
                // console.log(orderData)
                // console.log(this.props.title)
                if(orderData[j].title==this.props.title){
                      // console.log(j)
                    check=true;
                    this.setState({quantity:this.state.quantity+1})
                    return this.AddData(check,j,orderData)
                }
              }
              console.log('zxc')
              this.AddData(check,null,orderData)
              this.setState({quantity:this.state.quantity+1})
            }
        else{
          console.log('ert')
              const orderDetail=this.state.Data;
              var quantity=this.state.quantity
              orderDetail.price=this.props.price*(quantity+1)
              orderDetail.quantity=1
              orderDetail.title=this.props.title
              orderDetail.rate=this.props.price
              const Data=[];
              this.setState({quantity:quantity+1})
              Data.push(orderDetail)
              this.props.setOrder(Data)
        }
          
        }
        if(text=='Minus'){
          if(this.state.quantity>0){
            if(this.props.order.length>0){
              const quantityarray=this.state.Data;
              const orderData=this.props.order
              let check=false
              for(let j=0; j<orderData.length; j++){
                // console.log(orderData)
                // console.log(this.props.title)
                if(orderData[j].title==this.props.title){
                      // console.log(j)
                    check=true;
                    this.setState({quantity:this.state.quantity-1})
                    return this.MinusData(check,j,orderData)
                }
              }
              console.log('zxc')
              this.MinusData(check,null,orderData)
              this.setState({quantity:this.state.quantity-1})
            }
        // else{
        //       const quantityarray=this.state.Data;
        //       const orderData=this.props.order
        //       quantityarray.price=this.props.price*(this.state.quantity-1)
        //       quantityarray.quantity=this.state.quantity-1
        //       quantityarray.title=this.props.title
        //       quantityarray.rate=this.props.price
        //       this.setState({Data:quantityarray,quantity:this.state.quantity-1})
        //       this.props.setOrder(this.state.Data)
        // }
          }
          
        }
}

    render(){
  return (
    <View style={{height:90,justifyContent:"center",backgroundColor:'white',marginTop:5}}>
          <View style={{flexDirection:"row"}}>
              <View style={{flex:.5}}>
                  <View style={{flexDirection:'row'}}>
                    <View style={{paddingLeft:10}}><Image source={require('../../images/unnamed.png')} style={{width:70,height:70}} /></View>
                      <View style={{marginLeft:10}}>
                        <View style={{marginTop:10}}><Text style={{fontSize:22,fontWeight:"bold"}}>{this.props.title}</Text></View>
                        <View style={{flexDirection:"row",marginTop:5}}><Text style={{fontSize:15,color:'#fc6203'}}>{this.state.quantity} </Text><Text style={{fontSize:15,color:'#fc6203'}}>X </Text><Text style={{fontSize:15,color:'#fc6203'}}>${this.props.price}</Text></View>
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
                        <Text style={{fontSize:18}}>{this.state.quantity}</Text>
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