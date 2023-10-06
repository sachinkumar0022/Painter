import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import UserHome from './UserHome';
import CustomDrawer from './CustomDrawer';
import Quotes from './Quotes';
import Ads from './Ads';
import Quotation_Detail from './Quotation_Detail';

const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    
    <Drawer.Navigator drawerContent={props=><CustomDrawer {...props}/>}>
       <Drawer.Screen name="Quotation_Detail" component={Quotation_Detail}/>
      <Drawer.Screen name="Quotes" component={Quotes}/>
      <Drawer.Screen name="Ads" component={Ads} />
      <Drawer.Screen name="UserHome" component={UserHome} />
     
      
    </Drawer.Navigator>
  )
}

export default Home

const styles = StyleSheet.create({
  header:{
    padding:20,
    margin:20,
    justifyContent:"center"  
  },
  txt:{
    flexDirection:"row",
    justifyContent:'space-between',
    borderWidth:0.5,


  }

})
