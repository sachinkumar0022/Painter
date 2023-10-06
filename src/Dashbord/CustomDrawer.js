import { StyleSheet, Text, View,Image, Button } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
  

const CustomDrawer = (props) => {
    return (
        <View >
            <View>
                <View >
                    <Image
                        source={require('../Images/UserCircle.png')}
                        style={styles.profile}
                    />
                </View>
                <TouchableOpacity >  
                    <Text>
                        View
                    </Text>
                </TouchableOpacity>
            </View>
            <DrawerItemList {...props} />
           
        </View>

    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    profile:{
        height: responsiveHeight(15), 
         width: responsiveWidth(25)
         ,marginHorizontal:50,
         marginTop:30, 
         borderRadius: 25,
         margin:20,
         borderColor:'blue',
         borderRadius:50
    }
})