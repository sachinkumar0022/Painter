import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

const Quotation_Detail = () => {
    const [showmodel, setshowmodel] = useState(false);
    return (
        <View>
            <View>
                <TouchableOpacity style={{ backgroundColor: 'rgba(123, 31, 162, 1)', width: 110, padding: 10, borderRadius: 10, margin: 10, left: 270, }}>
                    <Text style={{ color: 'white', fontWeight: '600' }}>
                        Add Rooms
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40, padding: 10, backgroundColor: 'white', borderRadius: 5, marginTop: 10 }}>
                <Text style={{ fontSize: 18, color: "black" }}>
                    Bedroom
                </Text>
                <TouchableOpacity onPress={() => setshowmodel(true)}>
                    <Text style={{ fontSize: 18, color: 'white', backgroundColor: 'red', padding: 5, paddingHorizontal: 20, borderRadius: 5 }}>
                        Edit
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40, padding: 10, backgroundColor: 'white', borderRadius: 5, marginTop: 10 }}>
                <Text style={{ fontSize: 18, color: "black" }}>
                    Kitchen
                </Text>
                <TouchableOpacity  onPress={() => setshowmodel(true)}>
                    <Text style={{ fontSize: 18, color: 'white', backgroundColor: 'red', padding: 5, paddingHorizontal: 20, borderRadius: 5 }}>
                        Edit
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40, padding: 10, backgroundColor: 'white', borderRadius: 5, marginTop: 10 }}>
                <Text style={{ fontSize: 18, color: "black" }}>
                    Bathroom
                </Text>
                <TouchableOpacity  onPress={() => setshowmodel(true)}>
                    <Text style={{ fontSize: 18, color: 'white', backgroundColor: 'red', padding: 5, paddingHorizontal: 20, borderRadius: 5 }}>
                        Edit
                    </Text>
                </TouchableOpacity>
            </View>
            <Modal transparent visible={showmodel} >

                <View style={styles.centerView}>
                    <View style={styles.modelView}>
                        <View>
                            <Text style={styles.txt}>
                                Ceiling
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'row', margin: 10 }}>
                                    <Text style={styles.ftxt}>
                                        From ft :
                                    </Text>
                                    <TextInput
                                        placeholder=''
                                        keyboardType="numeric"
                                        style={styles.TextInput}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', margin: 10 }}>
                                    <Text style={styles.ftxt}>
                                        To ft :
                                    </Text>
                                    <TextInput
                                        placeholder=''
                                        keyboardType="numeric"
                                        style={styles.TextInput}
                                    />

                                </View>
                            </View>
                            <View style={styles.morning}>
                                <Text style={styles.mtxt}>
                                    Morning Roys
                                </Text>
                                <Text style={{ backgroundColor: "rgba(228, 155, 203, 1)", paddingHorizontal: 20,borderRadius:5 }}>

                                </Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row', borderBottomColor: 'gray',
                            borderBottomWidth: 0.5,
                        }}>
                            <Text style={styles.txt}>
                                Price :
                            </Text>
                            <Text style={styles.txt}>
                                {"10000"}
                            </Text>
                        </View>
                        <View >
                            <View>
                                <Text style={styles.txt}>Wall</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'row', margin: 10 }}>
                                    <Text style={styles.ftxt}>
                                        From ft :
                                    </Text>
                                    <TextInput
                                        placeholder=''
                                        keyboardType="numeric"
                                        style={styles.TextInput} />
                                </View>
                                <View style={{ flexDirection: 'row', margin: 10 }}>
                                    <Text style={styles.ftxt}>
                                        To ft:
                                    </Text>
                                    <TextInput
                                        placeholder=''
                                        keyboardType="numeric"
                                        style={styles.TextInput} />
                                </View>
                            </View>
                            <View style={styles.morning}>
                                <Text style={styles.mtxt} >
                                    Blue Glory
                                </Text>
                                <Text style={{ backgroundColor: "rgba(139, 193, 218, 1)", paddingHorizontal: 20,borderRadius:5  }}>

                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 0.5, }}>
                                <Text style={styles.txt}>
                                    Price :
                                </Text>
                                <Text style={styles.txt}>
                                    20000
                                </Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Text style={styles.add}>
                                    + Add
                                </Text>
                            </TouchableOpacity>
                            <View>
                                <TouchableOpacity onPress={() => setshowmodel(false)} style={{ backgroundColor: 'rgba(123, 31, 162, 1)', width: 80, padding: 10, borderRadius: 10, margin: 10, }}>
                                    <Text style={{ color: 'white', fontWeight: '600' }}>
                                        Save
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Quotation_Detail

const styles = StyleSheet.create({
    centerView: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 15,

    },
    add: {
        fontSize: 18,
        color: 'white',
        backgroundColor: 'red',
        width: 60,
        margin: 10,
        borderRadius: 20,
        fontWeight: "600"
    },
    mtxt: {
        fontSize: responsiveFontSize(2.3),
        color: 'black',
        padding: 7
    },
    ftxt: {
        fontSize: responsiveFontSize(2),
        color: 'black'
    },
    txt: {
        fontSize: responsiveFontSize(2.5),
        color: 'black',
        fontWeight: '500',
        margin: 10,
    },
    modelView: {
        bottom: 0,
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 5,
    },
    TextInput: {
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        width: 80,
      marginTop:-13

    },
    morning: {
        flexDirection: "row",
        borderWidth: 0.5,
        borderColor: 'gray',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        borderRadius: 7


    },
    modeltxt: {
        fontSize: 20,
        margin: 10,
        color: "black",
        borderWidth: 2,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    Sbtn: {
        padding: 10,
        paddingHorizontal: 35,
        backgroundColor: 'red',
        borderRadius: 10,
        margin: 10
    },
    Wbtn: {
        padding: 10,
        paddingHorizontal: 20,
        backgroundColor: 'blue',
        borderRadius: 10,
        margin: 10
    },
    tbtn: {
        color: 'white',
        fontWeight: '700',
        fontSize: 15
    },
    Cbtn: {
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 10,
        paddingHorizontal: 25,
        margin: 10
    },
    Ttext: {
        fontSize: 25,
        fontWeight: "600",
    }
})