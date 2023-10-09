import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { TextInput } from 'react-native-gesture-handler';


const Quote_Details = () => {
    return (
        <ScrollView>
            <View>
                <View style={{ margin: 10 }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '600', marginVertical: 5 }}>Project Name</Text>
                    <Text style={{ fontSize: 16, color: 'black', marginVertical: 5 }}>New Delhi, India</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 16, color: 'black', marginVertical: 5 }}>Sales Persion :</Text>
                        <Text style={{ fontSize: 16, color: 'black', marginVertical: 5 }}>Mr. Nitin Kumar</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 16, color: 'black', marginVertical: 5 }}>Consultation Date :</Text>
                        <Text style={{ fontSize: 16, color: 'black', marginVertical: 5 }}> 17 Oct, 2020 11:00 am</Text>
                    </View>
                </View>
                <View style={styles.house}>
                    <View style={styles.imhouse}>
                        <Image source={require("../Images/house.png")} style={{ width: 50, height: 50, }} />
                        <Text style={{ fontSize: 16, color: 'white' }}>Work Status</Text>
                    </View>
                    <View style={{ justifyContent: 'center', margin: 10, paddingHorizontal: 15 }}>
                        <Text style={styles.stxt}>Started</Text>
                        <Text style={{ fontSize: 13, lineHeight: 16, color: 'black', marginTop: 5 }}>25 Oct, 2020 09:00 am</Text>
                    </View>
                </View>
                <View>
                    <View style={{ margin: 10, }}>
                        <View>
                            <Text style={{ fontSize: 19, fontWeight: "700", color: 'black', margin: 10 }}>Quotations</Text>
                        </View>
                        <View>
                            <Text style={styles.qtxt}>
                                Quotation 1
                            </Text>
                            <Text style={styles.qtxt}>
                                Quotation 2
                            </Text>
                            <Text style={styles.qtxt}>
                                Quotation 3
                            </Text>
                            <Text style={styles.qtxt}>
                                Quotation 4
                            </Text>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity style={styles.adbtn}>
                                    <Text style={styles.adttn}>+ Add Quotation</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ borderTopWidth: 1, marginTop: 20 }}>
                        <View style={styles.qury}>
                            <Image source={require("../Images/Query.png")} style={{ width: 60, height: 60, margin: 10 }} />
                            <View style={{ justifyContent: 'center', margin: 10 }}>
                                <Text style={{ color: 'white', fontSize: 17 }}>Have any queries</Text>
                                <Text style={{ color: 'white', fontSize: 17 }}>Contact Us: 0000000000</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{margin:20,elevation:1,backgroundColor:'white',elevation:7,padding:20,borderRadius:5}}>
                    <View style={{alignItems:'center',borderBottomWidth:1}}>
                        <Text style={{fontSize:18,color:'black',padding:10,}}>Reschedule</Text>
                    </View>
                    <View style={{alignItems:'center',paddingVertical:20}}>
                        <Text style={{color:'rgba(204, 41, 41, 1)',fontSize:15}}>Note</Text>
                        <Text style={{color:'black',textAlign:'center'}}>You can only reschedule before consultation is completed.</Text>
                    </View>
                    <View style={{borderTopWidth:0.5}}>
                        <Text style={{color:'black',fontSize:15,marginTop:20,marginBottom:4}}>Reason :</Text>
                        <TextInput
                            placeholder='Give your reason here...'
                            style={styles.inputres} />
                    </View>
                    <View style={{marginTop:20}}>
                        <View>
                            <Text style={{fontSize:15,color:'black',fontWeight:'500'}}>Reschedule Date & Time:</Text>
                        </View>
                        <View style={{flexDirection:'row',}}>
                            <TextInput 
                            placeholder='DD/MM/YYYY'
                            style={{borderWidth:0.5,paddingHorizontal:20,margin:10}}/>
                            <TextInput 
                            placeholder='00:00 hr'
                            style={{borderWidth:0.5,paddingHorizontal:25,margin:10}}/>
                        </View>
                    </View>
                    <View style={{marginTop:20}} >
                        <Text style={{color:'black',fontWeightL:"500",fontSize:15,marginBottom:4}}>Address:</Text>
                        <TextInput 
                            placeholder='Enter your address...'
                            style={{borderWidth:0.5,}}/>
                    </View>
                    <TouchableOpacity style={styles.adbtn}>
                        <Text style={styles.adttn}>Reschedule</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Quote_Details;
const styles = StyleSheet.create({
    house: {

        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 30,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(110, 214, 253, 0.5)',
    },
    inputres: {
        borderWidth: 1,
        height: responsiveHeight(10),
        

    },
    qury: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 20,
        backgroundColor: 'rgba(177, 68, 240, 0.5)',
        borderRadius: 10,
        padding: 10,

    },
    stxt: {
        fontSize: 20,
        color: 'rgba(0, 204, 82, 1)',

    },
    imhouse: {
        justifyContent: 'center',
        margin: 20,
        alignItems: 'center',
        paddingHorizontal: 15,
        borderRightWidth: 1,
        borderColor: 'white'
    },
    qtxt: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
        borderBottomWidth: 1,
        margin: 10,
        padding: 10
    },
    adbtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(204, 41, 41, 1)',
        padding: 12,
        width: responsiveWidth(80),
        marginTop: 15,
        borderRadius: 5

    },
    adttn: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600'
    },

})