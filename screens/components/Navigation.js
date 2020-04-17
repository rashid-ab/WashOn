import * as React from 'react';
import { View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Signin from '../Signin';
import Signup from '../Signup';
const AppNavigator = createStackNavigator({
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
    // App:App,
    
  },{
    initialRouteName:'Auth',
    defaultNavigationOptions:{
    header:null
    },
});
  
  export default createAppContainer(AppNavigator);