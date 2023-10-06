import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";




const profile = () => {
    return (
        <View style={{backgroundColor:'rgba(18, 18, 18, 1)'}}>
            <ScrollView>
                <View>
                    <Image source={require("../Images/my.png")} style={{  width: responsiveWidth(95),height: 160,borderRadius:10,margin:10 }} />
                </View>
                <View style={{ alignItems: 'center', marginTop: -80 }}>
                    <View>
                        <Image source={require("../Images/UserCircle.png")} style={styles.profile} />
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.tbtn}>update</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.inputtop}>
                    <Text style={styles.inputtxt}>First Name</Text>
                    <TextInput
                        placeholder='Enter your First Name'
                        style={styles.input}
                    />
                    <Text style={styles.inputtxt}>Last Name</Text>
                    <TextInput
                        placeholder='Enter your Last Name'
                        style={styles.input}
                    />
                    <Text style={styles.inputtxt}>Date of Birth</Text>
                    <TextInput
                        placeholder='DD-MM-YYYY'
                        style={styles.input}
                    />
                    <Text style={styles.inputtxt}>Email ID</Text>
                    <TextInput
                        placeholder='@ Email'
                        style={styles.input}
                    />
                    <Text style={styles.inputtxt}>Mobile</Text>
                    <TextInput
                        placeholder='+91000000000'
                        style={styles.input}
                    />
                    <Text style={styles.inputtxt}>Gender</Text>
                    <TextInput
                        placeholder='Select Gender'
                        style={styles.input}
                    />
                </View>
                <View style={{alignItems:'center',margin:10}}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.tbtn}>Edit</Text>
                </TouchableOpacity>
                </View>
              
            </ScrollView>
        </View>
    )
}

export default profile

const styles = StyleSheet.create({
    profile: {
        height: responsiveHeight(22),
        width: responsiveWidth(28), 
        borderColor: 'black',
        borderRadius: 80
    },
    btn: {
        padding: 8,
        backgroundColor: 'red',
        alignItems: 'center',
        width: 100,
        borderRadius: 10,
    },
    tbtn: {
        color: 'white',
        fontSize: 18,
        
    },
    input: {

        borderColor: 'white',
        borderBottomWidth: 0.5,
        
        },
    inputtop: {
        margin: 15
    },
    inputtxt:{
        color:'white',
        marginTop:10
    }

})