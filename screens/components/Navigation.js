import * as React from 'react';
import { View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Signin from '../Signin';
import Signup from '../Signup';
import Home from '../Home';
import Notification from '../Notification';
import Earn from '../Earn';
import Aboutus from '../Aboutus';
import Orders from '../Orders';
import Settings from '../Settings';
import Menue from './Menue';


const AppNavigator = createStackNavigator({
      Home:{
          screen:Home
      },
      Notification:{
          screen:Notification
      },
      Earn:{
          screen:Earn
      },
      Orders:{
          screen:Orders
      },
      Aboutus:{
          screen:Aboutus
      },
      Settings:{
          screen:Settings
      },
        },
        {
          defaultNavigationOptions:({navigation})=>(
            {
            headerTitleAlign: 'center',
            headerTitleStyle:{
                flexGrow:1,
                marginTop:10
            },
            headerStyle:{
                backgroundColor:'#fc6203',
            },
            headerTintColor:'white',
            headerLeft:<Menue navigation={navigation}/>
  
})
});

const SwitchNavigator = createStackNavigator({
    Auth:createStackNavigator( {
        signin:{
            screen:Signin
            },
            signup:{ 
            screen: Signup
            }
          },
          {
            initialRouteName:'signin',
            defaultNavigationOptions:{
            header:null
            }
    }),
    App:AppNavigator,
    
  },{
    initialRouteName:'Auth',
    defaultNavigationOptions:{
    header:null
    },
});
  
  export default createAppContainer(SwitchNavigator);