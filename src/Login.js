import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity,ImageBackground } from 'react-native'
import React from 'react'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const Register = ({ navigation }) => {
  return (
    <ImageBackground
    source={require('./Images/pgg.jpg')}
    style={styles.backgroundImage}
  >
    <SafeAreaView>

      <View style={{ marginTop: 50, margin: 20 }}>
        <Text style={{ fontSize: responsiveFontSize(4), color: 'black', fontWeight: 'bold' }}>Sign in</Text>
        <ScrollView>
          <TextInput
            placeholder='email'
            //   value={ "" }
            //   onChangeText={text => (text)}
            style={styles.input}
          />
          <TextInput
            placeholder='password'
            //   value={""}
            //   onChangeText={text => (text)}
            style={styles.input}
          />

          <TouchableOpacity style={styles.fd1} onPress={()=>navigation.navigate("Forget password")}>
               <Text style={styles.fd}>Forget password ?</Text>
            </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={"Api Hit"}
          >
            <Text style={styles.text}>Sign in</Text>
          </TouchableOpacity>
          <View style={{flexDirection:"row", justifyContent:'center', display:'flex'}}>
            <Text style={{margin:5, color:'white'}}>don't have a account</Text>
            <TouchableOpacity style={{margin:5,}} onPress={() => navigation.navigate("Register")}>
            <Text style={{color:'blue'}}>Sign up</Text>
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
    fontSize: 18,
    borderRadius:10,
    padding: 10,
    margin: 10,
    backgroundColor:'white',

  },
  fd:{
    color:'blue',
    width: responsiveWidth(50),

  },
  backgroundImage:{
    flex: 1,
    resizeMode: 'cover',
  
  },
  fd1:{
    padding:'auto',
    left:200,
    margin:10,
    width: responsiveWidth(50),
  },
  frt: {
    color: 'blue',
    margin: 10,
  },
  btn: {
    backgroundColor: 'green',
    borderRadius: 10,
    marginHorizontal: 20,
  },
  text: {
    color: 'white',
    padding: 12,
    textAlign: 'center',
    fontSize: 18,

  }

})