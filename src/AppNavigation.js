import React from 'react'
import Register from './Register';
import Login from './Login';
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Forgetpassword from './Forgetpassword';
import Home from './Dashbord/Home';
import profile from './Dashbord/profile';



const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator>
    
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Forget password" component={Forgetpassword} options={{headerShown:false}}/>
      {/* <Stack.Screen name="profile" component={profile} options={{headerShown:false}} /> */}
      
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})