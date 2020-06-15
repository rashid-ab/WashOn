import * as React from 'react';
import { View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Signin from '../Signin';
import Signup from '../Signup';
import Home from '../Home';
import Man from '../HomeComponents/Man';
import Woman from '../HomeComponents/Woman';
import Children from '../HomeComponents/Children';
import Bedding from '../HomeComponents/Bedding';
import Bag from '../OrderComponents/Bag';
import Notification from '../Notification';
import Earn from '../Earn';
import Aboutus from '../Aboutus';
import Orders from '../Orders';
import Settings from '../Settings';
import Menue from './Menue';
import DrawerContentComponent from './DrawerComponent';

// const Stack = createStackNavigator();
// const HomeStack = createStackNavigator();
// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();
// const WashTab = createMaterialTopTabNavigator();

// const Tab = createBottomTabNavigator();
const myTopTab = createMaterialTopTabNavigator({
  Man: Man,
  Woman: Woman,
  Children: Children,
  Bedding: Bedding,
  // Saved: {screen: Saved}
  },{defaultNavigationOptions: ({ navigation }) => ({
    // headerShown:false,
// tabBarIcon: ({ focused, horizontal, tintColor }) => {
//     const { routeName } = navigation.state;
//     // let IconComponent = Ionicons;
//     let iconName;
//     if (routeName === 'Event') {
//         iconName  ='sofa';
//         type="material-community"
//     }
//     else if(routeName === 'Location') {
//         // return (
//         //     icon('user',focused)
//         // );
//         iconName = 'location-arrow';
//         type="font-awesome"
//     }
//     else if(routeName === 'Search') {
//         // return (
//         //     icon('user',focused)
//         // );
//         iconName = 'search';
//         type="font-awesome"
//     }
//     return <Icon name={iconName} type={type} size={25} color={tintColor} />
// },
}),
      tabBarOptions: {
          showIcon: false ,
          activeTintColor: 'white',
          inactiveTintColor: '#fc6203',
          labelStyle: {
              fontSize: 12,
              fontWeight:"bold"
              
          },
          indicatorStyle:{
              height: 40,
              backgroundColor:'#fc6203',
              justifyContent:"center",
              alignSelf:"center",
              borderRadius:20,
              width:"20%",
              margin:10,
              // marginLeft:5
              
              
          },
          style:{
              backgroundColor:'white',
              marginTop:Platform.OS==='ios'?0:0,
              height:60,
              // alignItems:"center",
              justifyContent:"center"
          }
      },
});


const AppNavigator = createStackNavigator({
  Home:{
      screen:Home,navigationOptions:({navigation})=>({headerLeft:<Menue navigation={navigation}/>})
  },
  Notification:{
      screen:Notification,navigationOptions:({navigation})=>({headerLeft:<Menue navigation={navigation}/>})
  },
  Earn:{
      screen:Earn,navigationOptions:({navigation})=>({headerLeft:<Menue navigation={navigation}/>})
  },
  Orders:{
      screen:Orders,navigationOptions:({navigation})=>({headerLeft:<Menue navigation={navigation}/>})
  },
  Aboutus:{
      screen:Aboutus,navigationOptions:({navigation})=>({headerLeft:<Menue navigation={navigation}/>})
  },
  Settings:{
      screen:Settings,navigationOptions:({navigation})=>({headerLeft:<Menue navigation={navigation}/>})
  },
  Bag:{
    screen:Bag,navigationOptions:({navigation})=>({headerLeft:<Menue navigation={navigation}/>})
  },
  Wash:{
    screen:myTopTab,navigationOptions:{}
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
        // headerLeft:<Menue navigation={navigation}/>

})
});

const SwitchNavigator = createStackNavigator({
    Auth:createStackNavigator( {
        signin:{
            screen:Signin,
            },
            signup:{ 
            screen: Signup
            }
          },
          {
            initialRouteName:'signin',
            defaultNavigationOptions:{
                headerShown:false
            }
    }),
    App:AppNavigator,
    
  },{
    initialRouteName:'Auth',
    defaultNavigationOptions:{
        headerShown:false
    },
});

// function TabApp() {
//   return (
//       <Tab.Navigator
//       tabBarOptions={{
//         labelStyle: { fontSize: 12,backgroundColor:'orange',width:"100%",height:30,padding:5,borderRadius:20 },
//         tabStyle: {  },
//         style: { backgroundColor: 'white' },
//         activeTintColor:'white',
        
//       }}>
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Notification" component={Notification} />
//       </Tab.Navigator>
//   );
// }

// function MyTabs() {
//   return (
//     <WashTab.Navigator
//     tabBarOptions={{
//       labelStyle: { fontSize: 12,backgroundColor:'orange',width:70,height:30,padding:5,borderRadius:20 },
//       tabStyle: {  },
//       indicatorStyle:{borderBottomColor:'black'},
//       style: { backgroundColor: 'white' },
//       activeTintColor:'white',
      
//     }}>
//       <WashTab.Screen name="Man" component={Man} />
//       <WashTab.Screen name="Woman" component={Woman} />
//       <WashTab.Screen name="Children" component={Children} />
//       <WashTab.Screen name="Bedding" component={Bedding} />
//     </WashTab.Navigator>
//   );
// }
// function HomeStacks({navigation}) {
//   // const route = useRoute();
//     return (
//       // <NavigationContainer>
//         <HomeStack.Navigator initialRouteName="Home"
//           screenOptions={({route})=>({
//             headerTitleAlign: 'center',
//             headerStyle: {
//               backgroundColor: '#fc6203',
//             },
//           headerLeft:() =><Menue navigation={navigation} routes={route.name}/>,
//             headerTintColor: '#ffff',
//             headerTitleStyle: {
//               fontWeight: 'bold',
//             },})}>
//             <HomeStack.Screen name="Home" component={Home} />
//             <HomeStack.Screen name="Wash" component={MyTabs} options={{title:'Wash & Dry',headerLeft:()=>null}}/>
//             <HomeStack.Screen name="Notification" component={Notification} />
//             <HomeStack.Screen name="Earn" component={Earn} />
//             <HomeStack.Screen name="Orders" component={Orders} />
//             <HomeStack.Screen name="Aboutus" component={Aboutus} />
//             <HomeStack.Screen name="Settings" component={Settings} />
//          </HomeStack.Navigator>
//     );
//   }
//   function DrawerNav() {
//       return (
//         // <NavigationContainer>
//           <Drawer.Navigator
//           screenOptions={{
//             DrawerContentComponent:()=><DrawerContentComponent />,
            
//           }}
//           >
//             <Drawer.Screen name="Root" component={HomeStacks} options={{headerShown:true,drawerLabel:()=>null,title:null,drawerIcon:()=>null}}/>
            
//            </Drawer.Navigator>
//       );
//     }
// function MyStack() {
//   // const route = useRoute();
//     return (
//         <NavigationContainer>
//               <Stack.Navigator
//               >
//               <Stack.Screen name="signin" component={Signin} options={{headerShown:false}} />
//               <Stack.Screen name="signup" component={Signup} options={{headerShown:false}} />
//               {/* <Stack.Screen name="forget" component={Forget} /> */}
//               <Stack.Screen name="Switch" component={DrawerNav} options={{headerShown:false}}/>
              
//               </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
  
  export default createAppContainer(SwitchNavigator);