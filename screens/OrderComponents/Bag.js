import React, {Component} from 'react';
import {TouchableOpacity,StatusBar,FlatList, RefreshControl ,StyleSheet,TextInput ,Text, View,ImageBackground,TouchableWithoutFeedback, KeyboardAvoidingView, Image} from 'react-native';
import BagComponent from '../components/BagComponent'

export default class Bag extends Component {
    constructor(props)
{
    super(props);
    this.state={
      data:[
        {Heading:'Wash',Items:[{Category:'Men',Items:[{quantity:'2',unit:'10',total:'10'},{item:'Jeans',quantity:'2',unit:'10',total:'10'},{item:'Trouser',quantity:'2',unit:'10',total:'10'}]},{Category:'Men',Items:[{quantity:'2',unit:'10',total:'10'},{item:'Jeans',quantity:'2',unit:'10',total:'10'},{item:'Trouser',quantity:'2',unit:'10',total:'10'}]}]},
        {Heading:'DryClean',Items:[{Category:'Women',Items:[{quantity:'2',unit:'10',total:'10'},{item:'Jeans',quantity:'2',unit:'10',total:'10'},{item:'Trouser',quantity:'2',unit:'10',total:'10'}]},{Category:'Men',Items:[{quantity:'2',unit:'10',total:'10'},{item:'Jeans',quantity:'2',unit:'10',total:'10'},{item:'Trouser',quantity:'2',unit:'10',total:'10'}]},{Category:'Men',Items:[{quantity:'2',unit:'10',total:'10'},{item:'Jeans',quantity:'2',unit:'10',total:'10'},{item:'Trouser',quantity:'2',unit:'10',total:'10'}]}]},
        {Heading:'Iron',Items:[{Category:'Children',Items:[{quantity:'2',unit:'10',total:'10'},{item:'Jeans',quantity:'2',unit:'10',total:'10'},{item:'Trouser',quantity:'2',unit:'10',total:'10'}]},{Category:'Men',Items:[{quantity:'2',unit:'10',total:'10'},{item:'Jeans',quantity:'2',unit:'10',total:'10'},{item:'Trouser',quantity:'2',unit:'10',total:'10'}]},{Category:'Men',Items:[{quantity:'2',unit:'10',total:'10'},{item:'Jeans',quantity:'2',unit:'10',total:'10'},{item:'Trouser',quantity:'2',unit:'10',total:'10'}]}]},
      ]};
}
componentDidMount = () => {
  this.setState({data:this.state.data})
}
render(){
  return (
    <View style={{flex:1}}>
      <FlatList 
          data={this.state.data}
          refreshControl={
            <RefreshControl 
              refreshing={this.state.isLoading}
              onRefresh={()=>this.componentDidMount()}/>
          }
          renderItem={({ item, index }) => (
            <BagComponent  data={item.Items} Heading={item.Heading}  navigation={this.props.navigation} />
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
