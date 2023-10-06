import { StyleSheet, 
  Text,ImageBackground, 
  View,SafeAreaView,ScrollView,TextInput,
  TouchableOpacity } from 'react-native'
import React from 'react'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import PhoneInput from 'react-native-phone-input'


const Register = ({navigation}) => {
  return (
    <ImageBackground
      source={require('./Images/pgg.jpg')}
      style={styles.backgroundImage}
    >
    <SafeAreaView>
    <View style={{ marginTop: 50, margin: 20,}}>
      <Text style={{ fontSize: responsiveFontSize(4), color: 'black', fontWeight: 'bold' }}>Sign up</Text>
      <ScrollView>
        <TextInput
          placeholder='first Name'
        //   value={""}
        //   onChangeText={""}
          style={styles.input}
        />
         <TextInput
          placeholder='last Name'
        //   value={""}
        //   onChangeText={""}
          style={styles.input}
        />

        <TextInput
          placeholder='email'
        //   value={ "" }
        //   onChangeText={text => (text)}
          style={styles.input}
        />
      <PhoneInput
        initialCountry="in" 
        allowZeroAfterCountryCode={true} 
        autoFormat={true} 
        style={styles.input}
      />

        <TextInput
          placeholder='password'
        //   value={""}
        //   onChangeText={text => (text)}
          style={styles.input}
        />
        <TextInput
          placeholder='confirm  password'
        //   value={""}
        //   onChangeText={text => (text)}
          style={styles.input}
        />
        
        <TouchableOpacity
          style={styles.btn}
          onPress={"Api Hit"}
        >
          <Text style={styles.text}>Sign up</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 20,flexDirection:'row',justifyContent:'center'}}>
          <Text style={{color:'white'}}>Already have an account </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.frt}> Sign in </Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
    </View>
  </SafeAreaView>
  </ImageBackground>
);
}

export default Register;

const styles = StyleSheet.create({
input: {
  fontSize: responsiveFontSize(2),
  color: 'black',
  
  borderRadius:10,
  padding: 10,
  margin:7,
  backgroundColor:"white"

},
backgroundImage:{
  flex: 1,
  resizeMode: 'cover',

},
frt: {
  color: 'blue',
  fontWeight:"400",

  width:100,
},
btn: {
  backgroundColor: 'black',
  borderRadius: 10,
  marginHorizontal:20,
 marginTop:10,
 fontWeight:"600"
},
text: {
    color: 'white',
    padding: 12,
    textAlign: 'center',
    fontSize: 18,

  }

})