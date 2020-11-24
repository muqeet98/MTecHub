import React from 'react';
//import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../src/screens/Home';
import Login from '../src/screens/Login';
import Signup from '../src/screens/Signup';
import First from '../src/screens/First';
const Stack= createStackNavigator();
const Drawer= createDrawerNavigator();

function AppHome() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="First" component={First} options={{headerShown: false}} />
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />

      <Stack.Screen name="Signup" component={Signup}  options={({ navigation }) => ({
    
          title: 'Sign Up',
          headerStyle: {
            backgroundColor: 'black'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

          })
        } />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
 
export default AppHome;