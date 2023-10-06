import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
// import { Picker } from '@react-native-picker/picker';

const Quotes = () => {
  // const [selectedValue, setSelectedValue] = useState('Work Status');
  const [showmodel, setshowmodel] = useState(false);

  return (
    <View>
      <Modal transparent visible={showmodel}   >
        <View style={styles.centerView}>
          <View style={styles.modelView}>
            <TouchableOpacity style={styles.Wbtn} onPress={() => setshowmodel(false)}>
              <Text style={styles.tbtn}>Work Status</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Sbtn} onPress={() => setshowmodel(false)}>
              <Text style={styles.tbtn}>Started</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Cbtn} onPress={() => setshowmodel(false)}>
              <Text style={styles.tbtn}>Completed</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <ScrollView>
        <View>
          <Text style={{ fontSize: responsiveFontSize(2.5), margin: 10 }}>Quotes</Text>
        </View>
        <View style={styles.cards}>
          <View>
            <Text style={styles.txt}>{"Name"}</Text>
            <Text style={styles.Stxt}>{'New Delhi ,india'}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.Stxt}>Sales persion :</Text>
            <Text style={styles.Stxt}>Mr.Nitin Kumar</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 20 }}>
            <View>
              <Text style={{ color: 'black' }}>{'17 Oct, 2020 '}</Text>
              <Text style={{ color: 'black' }}>{'11:00 am '}</Text>
            </View>
            <View >
              <TouchableOpacity style={styles.Cbtn} onPress={() => setshowmodel(true)}>
                <Text style={styles.tbtn}>Completed</Text>
              </TouchableOpacity>
              {/* <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                style={{ backgroundColor: 'rgba(3, 111, 198, 1)', color: 'white', width: 180, borderRadius: 40 }} // Change background color and text color of the Picker
              >
                <Picker.Item label="work status" value="work status" />
                <Picker.Item label="Started" value="Started" />
                <Picker.Item label="Completed" value="Completed" />
              </Picker> */}
            </View>
          </View>

        </View>
        <View style={styles.cards}>
          <View>
            <Text style={styles.txt}>{"Name"}</Text>
            <Text style={styles.Stxt}>{'New Delhi ,india'}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.Stxt}>Sales persion :</Text>
            <Text style={styles.Stxt}>Mr.Nitin Kumar</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 20 }}>
            <View>
              <Text style={{ color: 'black' }}>{'17 Oct, 2020 '}</Text>
              <Text style={{ color: 'black' }}>{'11:00 am '}</Text>
            </View>
            <View >
              <TouchableOpacity style={styles.Cbtn} onPress={() => setshowmodel(true)}>
                <Text style={styles.tbtn}>Completed</Text>
              </TouchableOpacity>
              {/* <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                style={{ backgroundColor: 'green', color: 'white', width: 180, borderRadius: 40 }} // Change background color and text color of the Picker
              >
                <Picker.Item label="work status" value="work status" />
                <Picker.Item label="Started" value="Started" />
                <Picker.Item label="Completed" value="Completed" />
              </Picker> */}
            </View>
          </View>

        </View>
        <View style={styles.cards}>
          <View>
            <Text style={styles.txt}>{"Name"}</Text>
            <Text style={styles.Stxt}>{'New Delhi ,india'}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.Stxt}>Sales persion :</Text>
            <Text style={styles.Stxt}>Mr.Nitin Kumar</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 20 }}>
            <View>
              <Text style={{ color: 'black' }}>{'17 Oct, 2020 '}</Text>
              <Text style={{ color: 'black' }}>{'11:00 am '}</Text>
            </View>
            <View >
              <TouchableOpacity style={styles.Cbtn} onPress={() => setshowmodel(true)}>
                <Text style={styles.tbtn}>Completed</Text>
              </TouchableOpacity>
              {/* <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                style={{ backgroundColor: 'red', color: 'white', width: 180, borderRadius: 40 }} 
              >
                <Picker.Item label="work status" value="work status" />
                <Picker.Item label="Started" value="Started" />
                <Picker.Item label="Completed" value="Completed" />
              </Picker> */}
            </View>
          </View>

        </View>
        <View style={styles.cards}>
          <View>
            <Text style={styles.txt}>{"Name"}</Text>
            <Text style={styles.Stxt}>{'New Delhi ,india'}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.Stxt}>Sales persion :</Text>
            <Text style={styles.Stxt}>Mr.Nitin Kumar</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 20 }}>
            <View>
              <Text style={{ color: 'black' }}>{'17 Oct, 2020 '}</Text>
              <Text style={{ color: 'black' }}>{'11:00 am '}</Text>
            </View>
            <View >
              <TouchableOpacity style={styles.Cbtn} onPress={() => setshowmodel(true)}>
                <Text style={styles.tbtn}>Completed</Text>
              </TouchableOpacity>
              {/* <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                style={{ backgroundColor: 'rgba(3, 111, 198, 1)', color: 'white', width: 180, borderRadius: 40 }} // Change background color and text color of the Picker
              >
                <Picker.Item label="work status" value="work status" />
                <Picker.Item label="Started" value="Started" />
                <Picker.Item label="Completed" value="Completed" />
              </Picker> */}
            </View>
          </View>

        </View>
      </ScrollView>
    </View>
  )
}
export default Quotes
const styles = StyleSheet.create({
  cards: {
    margin: 10,
    marginHorizontal: 20,
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'rgba(3, 111, 198, 1)',
    borderRadius: 10,

  },
  modelView: {
    bottom: 0,
    alignItems: 'center',
    width:180,
    borderRadius: 20,
    backgroundColor: "#e3e3e3",
    marginBottom: 5,
  },
  Wbtn: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: 'blue',
    borderRadius: 10,
    margin: 10
  },
  Sbtn:{
    padding:10,
    paddingHorizontal:35,
    backgroundColor:'red',
    borderRadius:10,
    margin:10
  },
  centerView: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    
  },
  tbtn: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15
  },
  txt: {
    fontSize: responsiveFontSize(2.5),
    margin: 5,
    color: 'black'
  },
  Stxt: {
    fontSize: responsiveFontSize(2),
    margin: 5,
    color: 'black'
  },
  Cbtn: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 10,
    paddingHorizontal: 25,
    margin: 10
  },
  tbtn: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15
  },
})
